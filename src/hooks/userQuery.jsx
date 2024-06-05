import { useLocation } from "react-router-dom";
import { useMemo } from "react";

export function userQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}