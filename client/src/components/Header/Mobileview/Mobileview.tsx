import { createDisclosure, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input } from "@hope-ui/solid";
import { AiOutlineClose, AiOutlineCodepen, AiOutlineGithub, AiOutlineLinkedin, AiOutlineMenu } from 'solid-icons/ai'
import { FaBrandsFreeCodeCamp } from "solid-icons/fa";
import { currentLibrary } from "../../../store";
import "./styles.css";

export default function Mobileview() {
  const { isOpen, onOpen, onClose } = createDisclosure();

  const handleChangeSection = (elem: string) => {
    document.getElementById(elem)?.scrollIntoView({ behavior: "smooth" });
    onClose();
  }

  return (
    <div class="header-mobileview-container">
      <div class="menu-btn-container" onclick={onOpen}>
        <AiOutlineMenu size={30} color="#fff" />
      </div>
      <Drawer
        id="menu-modal"
        opened={isOpen()}
        placement="top"
        onClose={onClose}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <div class="menu-btn-container menu-btn-close" onclick={onClose}>
            <AiOutlineClose size={40} color="#fff" />
          </div>
          <DrawerHeader>Create your account</DrawerHeader>
          <DrawerBody>
            <div class="menu-container">
              <ul class="navbar">
                <li><a class="menu-btn nostyle" onclick={[handleChangeSection, "welcome-section"]}>{currentLibrary().navbar.li1}</a></li>
                <li><a class="menu-btn nostyle" onclick={[handleChangeSection, "services"]}>{currentLibrary().navbar.li2}</a></li>
                <li><a class="menu-btn nostyle" onclick={[handleChangeSection, "projects"]}>{currentLibrary().navbar.li3}</a></li>
                <li><a class="menu-btn nostyle" onclick={[handleChangeSection, "contact"]}>{currentLibrary().navbar.li4}</a></li>

              </ul>
            </div>
          </DrawerBody>
          <DrawerFooter>
            <ul class="socials">
              <li>
                <a class="nostyle" href="https://www.linkedin.com/in/j%C3%A9r%C3%B4me-gautier-a0020121b/" target='_blank'>
                  <AiOutlineLinkedin size={24} color="#fff" />
                </a>
              </li>
              <li>
                <a class="nostyle" href="https://codepen.io/GautierJerome/pens" target='_blank'>
                  <AiOutlineCodepen size={24} color="#fff" />
                </a>
              </li>
              <li>
                <a class="nostyle" href="https://www.freecodecamp.org/jgautier" target='_blank'>
                  <FaBrandsFreeCodeCamp size={24} color="#fff" />
                </a>
              </li>
              <li><a class="nostyle" href="https://github.com/Jerome-Gautier" id="github-link" target='_blank'>
                <AiOutlineGithub size={24} color="#fff" />
              </a>
              </li>
            </ul>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}