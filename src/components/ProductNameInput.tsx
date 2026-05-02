import { useEffect, useRef, useState } from "react";
import { searchBeautyProducts, type BeautyProduct } from "../lib/openBeautyFacts";

interface Props {
  value: string;
  onChange: (value: string) => void;
  onAutofill: (product: BeautyProduct) => void;
  disabled?: boolean;
}

const DEBOUNCE_MS = 380;

export const ProductNameInput = ({ value, onChange, onAutofill, disabled }: Props) => {
  const [suggestions, setSuggestions] = useState<BeautyProduct[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const abortRef = useRef<AbortController | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (abortRef.current) abortRef.current.abort();

    if (value.trim().length < 2) {
      setSuggestions([]);
      setIsOpen(false);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);

    debounceRef.current = setTimeout(async () => {
      const controller = new AbortController();
      abortRef.current = controller;

      try {
        const results = await searchBeautyProducts(value, controller.signal);
        setSuggestions(results);
        setIsOpen(results.length > 0);
        setActiveIndex(-1);
      } catch {
      } finally {
        setIsSearching(false);
      }
    }, DEBOUNCE_MS);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (product: BeautyProduct) => {
    onChange(product.product_name);
    onAutofill(product);
    setIsOpen(false);
    setSuggestions([]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, -1));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      handleSelect(suggestions[activeIndex]);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div className="autofill-wrap" ref={wrapperRef}>
      <div className="autofill-input-row">
        <input
          className="field-input"
          placeholder="e.g. Skin Restoration Cream"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => suggestions.length > 0 && setIsOpen(true)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          autoComplete="off"
          aria-autocomplete="list"
          aria-expanded={isOpen}
        />
        {isSearching && <span className="autofill-spinner" aria-hidden="true" />}
      </div>

      {isOpen && (
        <ul className="autofill-dropdown" role="listbox">
          {suggestions.map((product, index) => (
            <li
              key={`${product.product_name}-${index}`}
              className={`autofill-option${index === activeIndex ? " autofill-option--active" : ""}`}
              role="option"
              aria-selected={index === activeIndex}
              onMouseDown={() => handleSelect(product)}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <span className="autofill-option-name">{product.product_name}</span>
              <span className="autofill-option-hint">Autofill ingredients</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
