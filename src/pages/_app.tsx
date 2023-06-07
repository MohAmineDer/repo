// import "~/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { DM_Sans } from "next/font/google";
import { theme } from "~/styles/theme";

const dmSans = DM_Sans({
  style: "normal",
  weight: ["500"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          .slick-dots {
            bottom: -58px;
          }
          :root {
            --font-rubik: ${dmSans.style.fontFamily};
          }
        `}
      </style>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
