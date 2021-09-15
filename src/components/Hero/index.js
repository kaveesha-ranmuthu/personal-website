import React from "react";
import { HeroContainer, HeroWrapper, Hello, Info } from "./HeroElements";
import hello from "../../images/hello.png";

const Hero = () => {
  return (
    <>
      <HeroWrapper>
        <HeroContainer>
          <Hello src={hello} />
          <Info>
            I’m Kaveesha, a graduate student who is passionate about UI/UX and
            front-end development.
          </Info>
          <Info>
            Thanks for visiting my website! Feel free to stick around, read more
            about me, or take a look at my projects.
          </Info>
        </HeroContainer>
      </HeroWrapper>
    </>
  );
};

export default Hero;
