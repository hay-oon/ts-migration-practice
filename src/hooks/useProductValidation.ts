import { useState, useEffect } from "react";

interface Product {
  name: string;
  description: string;
  price: string;
}

interface Errors {
  name: string;
  description: string;
  price: string;
}

// useProductValidation 의 return값 타입 정의
interface ValidationResult {
  errors: Errors;
  validateTag: (tag: string) => string;
}

export const useProductValidation = (product: Product): ValidationResult => {
  const [errors, setErrors] = useState<Errors>({
    name: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    validateFields();
  }, [product]);

  // 필드 유효성 검사 함수
  const validateFields = () => {
    const newErrors: Errors = {
      name: "",
      description: "",
      price: "",
    };

    // 상품명 검증
    if (product.name && (product.name.length < 1 || product.name.length > 10)) {
      newErrors.name = "10자 이내로 입력해주세요";
    }

    // 상품 소개 검증
    if (
      product.description &&
      (product.description.length < 10 || product.description.length > 100)
    ) {
      newErrors.description = "10자 이상 입력해주세요";
    }

    // 가격 검증
    if (product.price) {
      if (!/^\d+$/.test(product.price)) {
        // /^\d+$/ => "문자열 전체가 숫자로만 이루어져 있어야 함"
        newErrors.price = "숫자로 입력해주세요";
      }
    }

    setErrors(newErrors);
  };

  // 태그 검증 함수
  const validateTag = (tag: string): string => {
    if (tag.length > 5) {
      return "5글자 이내로 입력해주세요";
    }
    return "";
  };

  return { errors, validateTag };
};
