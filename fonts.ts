import { Montserrat, Outfit } from "next/font/google";

/**
 * Montserrat — 标题字体 (h1/h2/h3)
 * 字重: 600 (semibold), 700 (bold)
 * 设计系统: 几何感强，专业但不冰冷
 */
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

/**
 * Outfit — 正文 / UI 字体
 * 字重: 300 (light), 400 (regular), 500 (medium), 600 (semibold)
 * 设计系统: 现代无衬线，阅读舒适，中性
 */
export const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});
