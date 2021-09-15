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
  EmailPhone,
} from "./ContactElements";
import contact from "../../images/contact.png";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

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
                <HiOutlineMail />
              </Icon>
              <EmailPhone href="mailto: kranmuthu1999@gmail.com">
                kranmuthu1999@gmail.com
              </EmailPhone>
            </ContactLink>
            <ContactLink>
              <Icon>
                <HiOutlinePhone />
              </Icon>
              <EmailPhone href="tel:0211922404">0211922404</EmailPhone>
            </ContactLink>
          </ContactInfo>
          <Paragraph>
            You can also find me on{" "}
            <Link href="https://github.com/kaveesha-ranmuthu" target="_blank">
              Github
            </Link>{" "}
            and{" "}
            <Link
              href="https://www.linkedin.com/in/kaveesha-ranmuthu/"
              target="_blank"
            >
              Linkedin
            </Link>
            .
          </Paragraph>
        </ContactContainer>
      </ContactWrapper>
    </>
  );
};

export default Contact;
