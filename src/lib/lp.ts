export const MANGO_PROFIT = 500;
export const ORANGE_PROFIT = 300;
export const SUGAR_CAP = 40;
export const WATER_CAP = 60;
export const SUGAR_MANGO = 2;
export const SUGAR_ORANGE = 1;
export const WATER_MANGO = 3;
export const WATER_ORANGE = 4;

export function sugarUsed(x: number, y: number): number {
  return SUGAR_MANGO * x + SUGAR_ORANGE * y;
}

export function waterUsed(x: number, y: number): number {
  return WATER_MANGO * x + WATER_ORANGE * y;
}

export function profit(x: number, y: number): number {
  return MANGO_PROFIT * x + ORANGE_PROFIT * y;
}

export function isFeasible(x: number, y: number): boolean {
  return x >= 0 && y >= 0 && sugarUsed(x, y) <= SUGAR_CAP + 1e-9 && waterUsed(x, y) <= WATER_CAP + 1e-9;
}

export type Corner = {
  id: "none" | "mango" | "orange";
  x: number;
  y: number;
  z: number;
  label: string;
  mix: string;
  why: string;
};

export const CORNERS: Corner[] = [
  {
    id: "none",
    x: 0,
    y: 0,
    z: 0,
    label: "Make nothing",
    mix: "0 L mango, 0 L orange",
    why: "Uses no resources. Earns nothing. A legal point, but a bad business.",
  },
  {
    id: "mango",
    x: 20,
    y: 0,
    z: 10_000,
    label: "All mango",
    mix: "20 L mango, 0 L orange",
    why: "Uses every kilogram of sugar and every litre of water. Highest profit of the three corners.",
  },
  {
    id: "orange",
    x: 0,
    y: 15,
    z: 4_500,
    label: "All orange",
    mix: "0 L mango, 15 L orange",
    why: "Water runs out first (60 L). Sugar still has 25 kg left unused. Profit is only ₦4,500.",
  },
];

export const OPTIMAL = CORNERS[1];

export function formatNaira(n: number): string {
  return `₦${Math.round(n).toLocaleString("en-NG")}`;
}
