import React from "react";
import {
  ContactContainer,
  ContactWrapper,
  ContactHeader,
  Paragraph,
  ContactInfo,
  ContactLink,
  Icon,
  Link,
} from "./ContactElements";
import contact from "../../images/contact.png";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <ContactWrapper>
        <ContactContainer>
          <ContactHeader src={contact} />
          <Paragraph>
            thanks for taking the time to look at my website!
          </Paragraph>
          <Paragraph>
            if you're interested in my work, please feel free to contact me.
          </Paragraph>
          <ContactInfo>
            <ContactLink>
              <Icon>
                <FaLinkedinIn />
              </Icon>
              <Link
                href="https://www.linkedin.com/in/kaveesha-ranmuthu/"
                target="_blank"
              >
                Linkedin
              </Link>
            </ContactLink>
            <ContactLink>
              <Icon>
                <FiGithub />
              </Icon>
              <Link href="https://github.com/kaveesha-ranmuthu" target="_blank">
                Github
              </Link>
            </ContactLink>
          </ContactInfo>
        </ContactContainer>
      </ContactWrapper>
    </>
  );
};

export default Contact;
