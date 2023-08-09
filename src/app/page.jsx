import Image from 'next/image'
import Link from 'next/link'


import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'
import { StylizedImage } from '@/components/StylizedImage'
import homeImg from '@/images/team/homeImg.jpeg'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-[#f28500] py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We’ve worked with hundreds of amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe technology holds the key to a brighter future, empowering us to tackle global challenges and create boundless possibilities for all.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time dateTime={caseStudy.year} className="font-semibold">
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <Container className="mt-16">
      <div className="lg:flex lg:items-start lg:justify-start">
        {/* SectionIntro on the left */}
        <div className="lg:mr-10 lg:ml-0">
          <SectionIntro
            eyebrow="Services"
            title="We support you in identifying, exploring, and responding to fresh opportunities."
            className="mt-24 sm:mt-32 lg:mt-20 lg:mb-10 sm:mb-15"
          >
            <p>
              As long as those opportunities involve investment in innovation-we can create an endless number of them.
               Our expertise ensures valuable returns and a steady stream of innovative solutions. 
            </p>
          </SectionIntro>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-16 lg:mt-10 lg:ml-5">
        {/* ListCard components */}
        <ListCard>
          <ListItem title="Web development">
            We specialise in crafting beautiful, high quality marketing pages.
            The rest of the website will be a shell that uses lorem ipsum
            everywhere.
          </ListItem>
        </ListCard>

        <ListCard>
        <ListItem title="Application development">
                We have a team of skilled developers who are experts in the latest
                app frameworks, like Angular 1 and Google Web Toolkit.
              </ListItem>
        </ListCard>
       
       
        <ListCard>
        <ListItem title="E-commerce">
                We are at the forefront of modern e-commerce development. Which
                mainly means adding your logo to the Shopify store template we’ve
                used for the past six years.
              </ListItem>
        </ListCard>

        
        <ListCard>
        <ListItem title="Custom content management">
                At Studio we understand the importance of having a robust and
                customised CMS. That’s why we run all of our client projects out
                of a single, enormous Joomla instance.
              </ListItem>
        </ListCard>

       
        <ListCard>
          <ListItem title="Web development">
            We specialise in crafting beautiful, high quality marketing pages.
            The rest of the website will be a shell that uses lorem ipsum
            everywhere.
          </ListItem>
        </ListCard>

        <ListCard>
        <ListItem title="Application development">
                We have a team of skilled developers who are experts in the latest
                app frameworks, like Angular 1 and Google Web Toolkit.
              </ListItem>
        </ListCard>
       
       
        <ListCard>
        <ListItem title="E-commerce">
                We are at the forefront of modern e-commerce development. Which
                mainly means adding your logo to the Shopify store template we’ve
                used for the past six years.
              </ListItem>
        </ListCard>

        
        <ListCard>
        <ListItem title="Custom content management">
                At Studio we understand the importance of having a robust and
                customised CMS. That’s why we run all of our client projects out
                of a single, enormous Joomla instance.
              </ListItem>
        </ListCard>
       

         

        {/* Add more ListCard components */}
      </div>
    </Container>
  );
}

// ListCard component for styling list items as cards
function ListCard({ children }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      {children}
    </div>
  );
}





export const metadata = {
  description:
    'We are developer studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadMDXMetadata('work')).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
  <div className="lg:flex lg:justify-between">

    <FadeIn className="max-w-[60%] lg:w-2/3 lg:pr-12 mt-16">
      <h2 className="font-display text-5xl sm:text-7xl font-medium tracking-tight text-neutral-950 [text-wrap:balance]">
      Coding Made Simple <br/> Drop The Code
        <br />
        <span className="text-2xl sm:text-3xl text-gray-500">
        We are Drop The Code, a cutting-edge Developer-Technology Studio(DTC), fusing design and technology to deliver exceptional solutions,innovations is our driving force.
        </span>
      </h2>
    </FadeIn>

    <FadeIn className="w-[50%] flex-none img-fluid">
  <StylizedImage
    src={homeImg}
    sizes="(max-width: 1024px) 42rem, 31rem"
    className="justify-center lg:justify-end w-full h-auto lg:w-45 ml-10"
  />
</FadeIn>

  </div>
</Container>



      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        Our team went beyond expectations,consistently delivering innovative and cutting-edge technology solutions.
        Our unwavering commitement to excellence has resulted in exceptional client satisfaction and solidified our reputation as industry leaders.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}




   {/* <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div> */}