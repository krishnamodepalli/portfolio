import { Nunito, JetBrains_Mono, Raleway } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  display: "swap",
  style: ["normal", "italic"]
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  style: ["normal", "italic"]
});
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  style: ["normal", "italic"]
});

export { nunito, raleway, jetbrains };
