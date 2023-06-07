import {
  Text,
  Container,
  Flex,
  Box,
  Avatar,
  Divider,
  IconButton,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Image,
  Show,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react";
import { FaGripLinesVertical, FaFacebook } from "react-icons/fa";
import { BsStackOverflow } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";
import { LuAlignVerticalSpaceAround } from "react-icons/lu";
import { VscGithubInverted } from "react-icons/vsc";
import { RiTwitterLine } from "react-icons/ri";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { Link } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useRef } from "react";

export default function Home() {
  const testies = [
    {
      name: "Mohamed Amine",
      position: "Senior Dev at Google",
      imageSrc:
        "https://lh3.googleusercontent.com/a/AAcHTte0472wPSNrAtfEqXu5ad5WzeYDgVbUbEwQgHKf=s288-c-no",
    },
    {
      name: "Mahmoud Amine",
      position: "Junior Dev at Facebook",
      imageSrc:
        "https://lh3.googleusercontent.com/a/AAcHTte0472wPSNrAtfEqXu5ad5WzeYDgVbUbEwQgHKf=s288-c-no",
    },
    {
      name: "Mohamed Amine",
      position: "Senior Dev at Google",
      imageSrc:
        "https://lh3.googleusercontent.com/a/AAcHTte0472wPSNrAtfEqXu5ad5WzeYDgVbUbEwQgHKf=s288-c-no",
    },
    {
      name: "Mahmoud Amine",
      position: "Junior Dev at Facebook",
      imageSrc:
        "https://lh3.googleusercontent.com/a/AAcHTte0472wPSNrAtfEqXu5ad5WzeYDgVbUbEwQgHKf=s288-c-no",
    },
    {
      name: "Mohamed Amine",
      position: "Senior Dev at Google",
      imageSrc:
        "https://lh3.googleusercontent.com/a/AAcHTte0472wPSNrAtfEqXu5ad5WzeYDgVbUbEwQgHKf=s288-c-no",
    },
    {
      name: "Mahmoud Amine",
      position: "Junior Dev at Facebook",
      imageSrc:
        "https://lh3.googleusercontent.com/a/AAcHTte0472wPSNrAtfEqXu5ad5WzeYDgVbUbEwQgHKf=s288-c-no",
    },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <main>
      <Flex
        paddingY={5}
        position="fixed"
        w="100%"
        justifyContent="center"
        background="white"
        zIndex={1000}
      >
        <Container
          display="flex"
          maxW="6xl"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text fontSize={20}>atomize</Text>
          <Show above="md">
            <Flex flexDirection="row" gap="7" alignItems="center">
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.getElementById("Home")?.offsetTop,
                    behavior: "smooth",
                  });
                }}
              >
                Home
              </Link>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.getElementById("Testimonials")?.offsetTop,
                    behavior: "smooth",
                  });
                }}
              >
                Testimonials
              </Link>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.getElementById("Features")?.offsetTop,
                    behavior: "smooth",
                  });
                }}
              >
                Features
              </Link>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.getElementById("Pricing")?.offsetTop,
                    behavior: "smooth",
                  });
                }}
              >
                Pricing
              </Link>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.getElementById("FAQ")?.offsetTop,
                    behavior: "smooth",
                  });
                }}
              >
                FAQ
              </Link>
              <Button fontWeight={500}>Sign Up</Button>
            </Flex>
          </Show>
          <Show below="md">
            <GiHamburgerMenu size={25} onClick={onOpen} cursor="pointer" />
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef.current}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader></DrawerHeader>

                <DrawerBody>
                  <Flex flexDirection="column" gap="7" alignItems="center">
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        onClose();
                        window.scrollTo({
                          top: document.getElementById("Home")?.offsetTop,
                          behavior: "smooth",
                        });
                      }}
                    >
                      Home
                    </Link>
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        onClose();
                        window.scrollTo({
                          top: document.getElementById("Testimonials")
                            ?.offsetTop,
                          behavior: "smooth",
                        });
                      }}
                    >
                      Testimonials
                    </Link>
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        onClose();
                        window.scrollTo({
                          top: document.getElementById("Features")?.offsetTop,
                          behavior: "smooth",
                        });
                      }}
                    >
                      Features
                    </Link>
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        onClose();
                        window.scrollTo({
                          top: document.getElementById("Pricing")?.offsetTop,
                          behavior: "smooth",
                        });
                      }}
                    >
                      Pricing
                    </Link>
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        onClose();
                        window.scrollTo({
                          top: document.getElementById("FAQ")?.offsetTop,
                          behavior: "smooth",
                        });
                      }}
                    >
                      FAQ
                    </Link>
                    <Button fontWeight={500}>Sign Up</Button>
                  </Flex>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Show>
        </Container>
      </Flex>
      <Container maxW="6xl" marginBottom={50}>
        <Flex flexDirection="column" gap={20} id="Home" position="relative">
          <Flex
            marginTop={40}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap={5}
          >
            <Text fontSize="4xl" w={{ lg: "70%" }} textAlign="center">
              Effortlessly save job postings straight to Notion.
            </Text>
            <Text
              color="gray"
              w={{ md: "50%" }}
              textAlign="center"
              lineHeight={8}
              fontSize={18}
            >
              A simple and powerful extension to save tons of time. Applying 3x
              faster means you&apos;re 3x more likely to land the job.
            </Text>
            <Button fontWeight={500} fontSize={18}>
              Download Chrome Extension
            </Button>
            <figure style={{ marginTop: 20 }}>
              <video
                style={{
                  borderRadius: 10,
                  width: "100%",
                }}
                autoPlay={true}
                muted={true}
                loop={true}
              >
                <source
                  src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                  type="video/mp4"
                />
              </video>
            </figure>
          </Flex>

          <Divider id="Testimonials" />

          <Box>
            <Slider
              {...{
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 3,
                centerMode: true,
                centerPadding: "0",
                initialSlide: 0,
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                      infinite: true,
                      dots: true,
                    },
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      initialSlide: 1,
                    },
                  },
                ],
              }}
            >
              {testies.map((testi, index) => (
                <Flex key={index} justifyContent="center" marginLeft={5}>
                  <Avatar
                    marginBottom={5}
                    src={testi.imageSrc}
                    name="nucleus"
                  />

                  <Flex gap={3} flexDirection="column" w="90%">
                    <Flex flexDirection="row">
                      {Array.from(Array(5).keys()).map((star) => (
                        <AiFillStar color="gold" key={star} />
                      ))}
                    </Flex>
                    <Text lineHeight={7} alignItems="justify" fontSize={18}>
                      Really glad I found this. Keeping track of job
                      applications has been a huge pain and this just makes it
                      so much easier.
                    </Text>
                    <Box>
                      <Text fontWeight={600} fontSize={18}>
                        {testi.name}
                      </Text>
                      <Text color="gray" fontSize={18}>
                        {testi.position}
                      </Text>
                    </Box>
                  </Flex>
                </Flex>
              ))}
            </Slider>
          </Box>

          <Divider id="Features" />

          <Flex flexDirection="column" gap={10}>
            <Button
              w={100}
              size="xs"
              bg="black"
              color="white"
              disabled={true}
              rounded="full"
              paddingY={5}
              fontWeight={500}
              fontSize={13}
              _hover={{ bg: "black", cursor: "auto" }}
            >
              Key features
            </Button>

            <Flex flexDirection="column" gap={5} marginBottom={50}>
              <Text
                fontSize="4xl"
                fontWeight={600}
                textAlign={{ base: "center", lg: "start" }}
              >
                Why use Atomize React?
              </Text>
              <Text
                fontSize={18}
                color="gray"
                w={{ base: "100%", lg: "44%" }}
                textAlign={{ base: "center", lg: "start" }}
              >
                Atomize React helps you in building fully responsive websites
                and products that match your style.
              </Text>

              <Flex
                gap={10}
                marginTop={3}
                flexWrap="wrap"
                justifyContent={{ base: "center", md: "start" }}
              >
                <Card w={250}>
                  <CardHeader>
                    <FaGripLinesVertical
                      size={30}
                      style={{
                        padding: "0 1px",
                        backgroundColor: "orange",
                        borderRadius: 3,
                      }}
                    />
                  </CardHeader>
                  <CardBody display="flex" flexDirection="column" gap={4}>
                    <Text fontSize={20}>Flexible Grid</Text>
                    <Text fontWeight={400} color="gray" fontSize={18}>
                      Change grid variables or give decimal column size.
                    </Text>
                  </CardBody>
                  <CardFooter>
                    <Link href="#" color="#2b61d7" fontSize={18}>
                      see how
                    </Link>
                  </CardFooter>
                </Card>
                <Card w={250}>
                  <CardHeader>
                    <LuAlignVerticalSpaceAround
                      size={30}
                      style={{
                        padding: "0 1px",
                        backgroundColor: "lightblue",
                        borderRadius: 3,
                      }}
                    />
                  </CardHeader>
                  <CardBody display="flex" flexDirection="column" gap={4}>
                    <Text fontSize={20}>Spacing</Text>
                    <Text fontWeight={400} color="gray" fontSize={18}>
                      Update theme throughout the application easily.
                    </Text>
                  </CardBody>
                  <CardFooter>
                    <Link href="#" color="#2b61d7" fontSize={18}>
                      see how
                    </Link>
                  </CardFooter>
                </Card>
                <Card w={250}>
                  <CardHeader>
                    <FaGripLinesVertical
                      size={30}
                      style={{
                        padding: "0 1px",
                        backgroundColor: "orange",
                        borderRadius: 3,
                      }}
                    />
                  </CardHeader>
                  <CardBody display="flex" flexDirection="column" gap={4}>
                    <Text fontSize={20}>Flexible Grid</Text>
                    <Text fontWeight={400} color="gray" fontSize={18}>
                      Change grid variables or give decimal column size.
                    </Text>
                  </CardBody>
                  <CardFooter>
                    <Link href="#" color="#2b61d7" fontSize={18}>
                      see how
                    </Link>
                  </CardFooter>
                </Card>
                <Card w={250}>
                  <CardHeader>
                    <LuAlignVerticalSpaceAround
                      size={30}
                      style={{
                        padding: "0 1px",
                        backgroundColor: "lightblue",
                        borderRadius: 3,
                      }}
                    />
                  </CardHeader>
                  <CardBody display="flex" flexDirection="column" gap={4}>
                    <Text fontSize={20}>Spacing</Text>
                    <Text fontWeight={400} color="gray" fontSize={18}>
                      Update theme throughout the application easily.
                    </Text>
                  </CardBody>
                  <CardFooter>
                    <Link href="#" color="#2b61d7" fontSize={18}>
                      see how
                    </Link>
                  </CardFooter>
                </Card>
              </Flex>
            </Flex>

            <Divider marginBottom={{ base: 0, lg: -5 }} />

            <Flex
              alignItems="center"
              gap={{ base: 0, lg: 4 }}
              justifyContent={{ base: "center", lg: "space-between" }}
            >
              <Image
                src="/assets/services.svg"
                alt="react_illustration"
                w={{ base: 0, lg: "50%" }}
                display={{ base: "hidden", lg: "block" }}
              />

              <Flex
                flexDirection="column"
                gap={5}
                w={{ base: "80%", md: "60%", lg: "50%" }}
              >
                <Text
                  fontSize="4xl"
                  fontWeight={600}
                  textAlign={{ base: "center", lg: "start" }}
                >
                  Quickly save job applications at the click of a button
                </Text>
                <Text textAlign={{ base: "center", lg: "start" }} fontSize={18}>
                  Our easy to use chome extension will save you tons of time and
                  energy in your tedious job search. By adding our button to all
                  your favorite job posting sites, you can easily start tracking
                  and making progress towards your dream job.
                </Text>
                <IconButton
                  display="flex"
                  gap={3}
                  alignItems="center"
                  _before={{ content: '"Get Started"' }}
                  aria-label="get-started"
                  icon={<ArrowForwardIcon />}
                />
              </Flex>
            </Flex>

            <Flex
              alignItems="center"
              gap={{ base: 0, lg: 4 }}
              justifyContent={{ base: "center", lg: "space-between" }}
            >
              <Flex
                flexDirection="column"
                gap={5}
                w={{ base: "80%", md: "60%", lg: "50%" }}
              >
                <Text
                  fontSize="4xl"
                  fontWeight={600}
                  textAlign={{ base: "center", lg: "start" }}
                >
                  Integrated with all your favorite job sites
                </Text>
                <Text textAlign={{ base: "center", lg: "start" }} fontSize={18}>
                  Our extension integrates with all the top job posting sites.
                  This includes Indeed, LinkedIn, Monster Jobs, and
                  ZipRecruiter.
                </Text>
                <IconButton
                  display="flex"
                  gap={3}
                  alignItems="center"
                  _before={{ content: '"Explore Extension"' }}
                  aria-label="explore-extension"
                  icon={<ArrowForwardIcon />}
                />
              </Flex>

              <Image
                src="/assets/services.svg"
                alt="react_illustration"
                w={{ base: 0, lg: "50%" }}
                display={{ base: "hidden", lg: "block" }}
              />
            </Flex>
          </Flex>

          <Divider id="Pricing" marginBottom={-5} />

          <Flex
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            gap={5}
          >
            <Text fontSize="4xl">Our Pricing Plan</Text>

            <Text
              fontSize={18}
              marginBottom={5}
              textAlign="center"
              color="gray"
              w={{ base: "80%", lg: "50%" }}
            >
              We currently have two available pricing options for Job Ripper and
              a third lifetime purchase option coming soon.
            </Text>

            <Flex
              alignItems="center"
              flexDirection={{ base: "column", lg: "row" }}
            >
              <Card w={350} h={390}>
                <CardHeader
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Button
                    bg="white"
                    rounded="full"
                    size="md"
                    _hover={{ backdropColor: "none", cursor: "auto" }}
                  >
                    Free Trial
                  </Button>
                  <Text fontSize={25} fontWeight={600} color="#2b61d7">
                    $0.00/mo
                  </Text>
                </CardHeader>
                <CardBody>
                  <Flex
                    flexDirection="column"
                    alignItems="center"
                    gap={4}
                    fontSize={16}
                  >
                    <Text>25 Saved Jobs</Text>
                    <Text>Constant Updates</Text>
                    <Text>3 Custom Fields</Text>
                    <Text>Trial support</Text>
                  </Flex>
                </CardBody>
                <CardFooter display="flex" justifyContent="center">
                  <Button
                    color="#2b61d7"
                    border="1px solid #2b61d7"
                    bg="white"
                    rounded="full"
                    size="lg"
                  >
                    Start Free Trial
                  </Button>
                </CardFooter>
              </Card>

              <Card
                w={380}
                h={470}
                scale={2}
                boxShadow="dark-lg"
                zIndex={999}
                bgGradient="linear(to-b, #1b54d1, #2b61a9 )"
                color="white"
              >
                <CardHeader
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  gap={4}
                >
                  <Button
                    color="#2b61d7"
                    bg="white"
                    rounded="full"
                    size="md"
                    _hover={{ background: "white", cursor: "auto" }}
                  >
                    Popular
                  </Button>
                  <Text fontSize={18}>Starting From</Text>
                  <Text fontSize={25} fontWeight={600}>
                    $4.99/mo
                  </Text>
                </CardHeader>
                <CardBody>
                  <Flex
                    flexDirection="column"
                    alignItems="center"
                    gap={4}
                    fontSize={16}
                  >
                    <Text>Unlimited Saved Jobs</Text>
                    <Text>Constant Updates</Text>
                    <Text>Unlimited Custom Fields</Text>
                    <Text>Access to the feature request board</Text>
                  </Flex>
                </CardBody>
                <CardFooter display="flex" justifyContent="center">
                  <Button color="black" bg="white" rounded="full" size="lg">
                    Purchase Now
                  </Button>
                </CardFooter>
              </Card>

              <Card w={350} h={440}>
                <CardHeader
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Button
                    bg="white"
                    rounded="full"
                    size="md"
                    _hover={{ backdropColor: "none", cursor: "auto" }}
                  >
                    Starting From
                  </Button>
                  <Text fontSize={25} fontWeight={600} color="#2b61d7">
                    Coming Soon....
                  </Text>
                </CardHeader>
                <CardBody>
                  <Flex
                    flexDirection="column"
                    alignItems="center"
                    gap={2.5}
                    fontSize={16}
                  >
                    <Text>Lifetime Access</Text>
                    <Text>Unlimited Saved Jobs</Text>
                    <Text>Constant Updates</Text>
                    <Text>Unlimited Custom Fields</Text>
                    <Text>Unlimited Support</Text>
                    <Text>Access to the feature request board</Text>
                  </Flex>
                </CardBody>
                <CardFooter display="flex" justifyContent="center">
                  <Button
                    color="#2b61d7"
                    border="1px solid #2b61d7"
                    bg="white"
                    rounded="full"
                    size="lg"
                  >
                    Coming Soon...
                  </Button>
                </CardFooter>
              </Card>
            </Flex>
          </Flex>

          <Divider />

          <Flex
            gap={16}
            justifyContent="space-between"
            alignItems="center"
            flexDirection={{ base: "column", lg: "row" }}
          >
            <Flex flexDirection="column" alignItems="center">
              <Text fontWeight={600} fontSize="4xl">
                15+
              </Text>
              <Text textAlign="center" fontSize={20} color="gray">
                Ready to use React Components
              </Text>
            </Flex>
            <Flex flexDirection="column" alignItems="center">
              <Text fontWeight={600} fontSize="4xl">
                60+
              </Text>
              <Text
                w={{ lg: 250 }}
                textAlign="center"
                fontSize={20}
                color="gray"
              >
                Predefined colors for theme setup
              </Text>
            </Flex>
            <Flex flexDirection="column" alignItems="center">
              <Text fontWeight={600} fontSize="4xl">
                {"</>"}
              </Text>
              <Text
                textAlign="center"
                fontSize={20}
                color="gray"
                w={{ lg: 250 }}
              >
                Detailed documentation for each component
              </Text>
            </Flex>
            <Flex flexDirection="column" alignItems="center">
              <Text fontWeight={600} fontSize="4xl">
                FREE
              </Text>
              <Text textAlign="center" fontSize={20} color="gray">
                Open source with regular updates
              </Text>
            </Flex>
          </Flex>

          <Divider id="FAQ" />

          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={5}
          >
            <Text fontSize="4xl" textAlign="center">
              Frequently Asked Questions
            </Text>

            <Text
              marginBottom={5}
              textAlign="center"
              color="gray"
              w={{ base: "90%", lg: "50%" }}
              fontSize={18}
            >
              We get a lot of questions via email, so we&apos;ve answered the
              most common ones below.
            </Text>

            <Flex
              gap={32}
              justifyContent="space-between"
              flexDirection={{ base: "column", lg: "row" }}
            >
              <Accordion allowToggle w={{ base: "100%", lg: "50%" }}>
                <AccordionItem>
                  <h2>
                    <AccordionButton paddingY={5}>
                      <Box as="span" flex="1" textAlign="left" fontSize={18}>
                        What job search engines does JobRipper work with?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} color="gray">
                    Currently Job Ripper works with ZipRecruiter, Linkedin Jobs,
                    Monster Jobs and Indeed. In the future we plan on supporting
                    as many as possible.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton paddingY={5}>
                      <Box as="span" flex="1" textAlign="left" fontSize={18}>
                        Can I specify what job data I want saved into Notion?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} color="gray">
                    Yes! That&apos;s the point, you will have full control over
                    what data will to be saved into Notion. We realize every job
                    seeker&apos;s needs are different and we allow full
                    customization of what&apos;s saved.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton paddingY={5}>
                      <Box as="span" flex="1" textAlign="left" fontSize={18}>
                        Do you have a Notion template?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} color="gray">
                    At this time we do not have a Notion template but we
                    recommend the default Job Board template that is offered by
                    notion.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>

              <Accordion allowToggle w={{ base: "100%", lg: "50%" }}>
                <AccordionItem>
                  <h2>
                    <AccordionButton paddingY={5}>
                      <Box as="span" flex="1" textAlign="left" fontSize={18}>
                        When will the lifetime membership be released?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} color="gray">
                    We do not have a set date at this time.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton paddingY={5}>
                      <Box as="span" flex="1" textAlign="left" fontSize={18}>
                        Where can I recommend improvements?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} color="gray">
                    Reach out to us via email and we&apos;ll try to get back to
                    you as soon as possible.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton paddingY={5}>
                      <Box as="span" flex="1" textAlign="left" fontSize={18}>
                        Can you save jobs somewhere other then Notion?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} color="gray">
                    At this time we only support saving job data to Notion, if
                    enough people request it we may expand outward and support
                    job posting to other places such as Google Sheets, Evernote,
                    ect.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Flex>
          </Flex>

          <Divider />

          <Flex
            gap={5}
            flexDirection={{ base: "column", xl: "row" }}
            alignItems="center"
            justifyContent="space-between"
            bg="#f7f8f9"
            rounded={20}
            w="full"
            paddingY={16}
            padding={10}
          >
            <Flex flexDirection="column">
              <Text fontSize="3xl" textAlign={{ base: "center", xl: "start" }}>
                UI Templates are on thier way 🚀
              </Text>
              <Text
                fontSize={20}
                color="#87898c"
                textAlign={{ base: "center", xl: "start" }}
              >
                Official UI templates build on Atomize React will be released
                very soon.
              </Text>
            </Flex>

            <Button
              rounded={200}
              w={200}
              h={50}
              display="flex"
              gap={3}
              color="white"
              bg="black"
              rightIcon={<ArrowForwardIcon />}
            >
              Get notified
            </Button>
          </Flex>

          <Divider />

          <Flex
            flexWrap="wrap"
            justifyContent="space-evenly"
            flexDirection={{ base: "column", xs: "row" }}
            alignItems={{ base: "center", sm: "start" }}
            color="gray"
            fontSize={16}
            gap={95}
          >
            <Flex flexDirection="column" gap={2}>
              <Text color="black" fontWeight={600} fontSize={18}>
                Docs
              </Text>
              <Text>Installation</Text>
              <Text>Theme Setup</Text>
              <Text>Grid</Text>
              <Text>Atoms</Text>
              <Text>Molecules</Text>
              <Text>Functions</Text>
            </Flex>

            <Flex flexDirection="column" gap={2}>
              <Text color="black" fontWeight={600} fontSize={18}>
                Atomize
              </Text>
              <Text>Features</Text>
              <Text>Design</Text>
              <Text>Development</Text>
            </Flex>

            <Flex flexDirection="column" gap={2}>
              <Text color="black" fontWeight={600} fontSize={18}>
                Resources
              </Text>
              <Text>Sketch File</Text>
              <Text>Github</Text>
              <Text>Github</Text>
            </Flex>

            <Flex flexDirection="column" gap={2}>
              <Text color="black" fontWeight={600} fontSize={18}>
                About
              </Text>
              <Text>Showcase</Text>
              <Text>Contribute</Text>
              <Text>Github</Text>
            </Flex>

            <Flex flexDirection="column" gap={2}>
              <Text color="black" fontWeight={600} fontSize={18}>
                Extras
              </Text>
              <Text>Blog</Text>
              <Text>Need Help?</Text>
              <Text>Give Feedback?</Text>
            </Flex>
          </Flex>

          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={3}
          >
            <Text fontSize={14} textAlign="center">
              Designed & Developed by Mohamed Amine
            </Text>
            <Flex gap={3} alignItems="center">
              <VscGithubInverted />
              <RiTwitterLine size={20} />
              <TiSocialLinkedinCircular size={20} style={{ marginLeft: -5 }} />
              <FaFacebook />
              <BsStackOverflow />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </main>
  );
}
