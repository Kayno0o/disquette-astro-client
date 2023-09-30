import { atom } from "nanostores";
import type { Person } from "../types/types";

export const user = atom<Person | null>(null)
