import Head from 'next/head'
import Link from 'next/link'
import Container from '../../components/layout/Container'
import Banner from '../../components/Banner'
import Nav from '../../components/Nav'
import Button from '../../components/Button'
import ButtonOutline from '../../components/ButtonOutline'
import Footer from '../../components/Footer'

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Windmill Dashboard HTML</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner tag={Link} href="/sponsor">
        You can sponsor this project and access exclusive content.
      </Banner>

      <div className="bg-pattern">
        <Nav />
        <Container>
          <header className="max-w-2xl py-20 text-gray-700">
            <h1 className="text-5xl font-extrabold leading-none tracking-tight font-montserrat md:text-6xl">
              Windmill Dashboard HTML
            </h1>
            <p className="mt-4 font-mono">
              No frameworks, no dependencies. Pure, flexible web development.
            </p>
          </header>
        </Container>
      </div>

      <Container className="my-16">
        <div className="grid gap-4 text-gray-700 md:grid-cols-10">
          <div className="md:col-span-7">
            <div className="p-4 border md:mb-10">
              <img src="/img/Dashboard.png" alt="Dashboard preview" loading="lazy" />
            </div>
          </div>

          <aside className="mb-8 md:col-span-3 md:mb-auto">
            <div className="p-4 border">
              <div className="flex justify-between">
                <p>Version</p>
                <p className="font-mono text-sm font-semibold">{props.lastRelease.name}</p>
              </div>
              <div className="flex justify-between">
                <p>Last update</p>
                <p className="font-mono text-sm font-semibold">07/2020</p>
              </div>
              <div className="flex justify-between">
                <p>License</p>
                <p className="font-mono text-sm font-semibold">MIT</p>
              </div>
              <div className="flex justify-between mb-4">
                <p>Read docs</p>
              </div>
              <ButtonOutline className="w-full mb-4">live preview</ButtonOutline>
              <Button tag="a" href={props.lastRelease.zipball_url} className="w-full">
                download
              </Button>
            </div>
          </aside>
        </div>

        <div className="grid gap-4 text-gray-700 md:grid-cols-10">
          <main className="md:col-span-7">
            <div className="mb-8 text-gray-700">
              <h2 className="mb-2 font-mono text-xl font-semibold">Description</h2>
              <p className="mb-4">
                If you're looking for the React version,{' '}
                <Link href="/sponsor">
                  <a className="border-b border-primary">go here</a>
                </Link>
                . This application is perfect if you are looking for flexibility, like a server
                rendered or a framework implementation that is not currently offered, or just don't
                want too much dependencies
              </p>
              <p>
                Accessibility is a priority in my projects and I think it should be in yours too, so
                this was developed listening to real screen readers and focus traps and keyboard
                navigation are available everywhere.
              </p>
            </div>
            <div>
              <h2 className="mb-2 font-mono text-xl font-semibold text-gray-700">Features</h2>
              <ul className="mb-4 space-y-2 list-inside list-square">
                <li>
                  <span className="ml-2">
                    Dark theme enabled (load even different images based on theme)
                  </span>
                </li>
                <li>
                  <span className="ml-2">
                    Throughly accessible (developed using screen readers)
                  </span>
                </li>
                <li>
                  <span className="ml-2">100% keyboard navigable</span>
                </li>
                <li>
                  <span className="ml-2">Custom components</span>
                </li>
                <li>
                  <span className="ml-2">Alpine JS (used for dropdowns and toggles)</span>
                </li>
                <li>
                  <span className="ml-2">Tailwind CSS</span>
                </li>
                <li>
                  <span className="ml-2">Chart.js</span>
                </li>
                <li>
                  <span className="ml-2">Heroicons</span>
                </li>
                <li>
                  <span className="ml-2">
                    <Link href="/sponsor">
                      <a className="border-b border-primary">Sponsor me</a>
                    </Link>{' '}
                    and have a voice deciding the next features and have early access to them
                  </span>
                </li>
              </ul>
            </div>
          </main>
        </div>
      </Container>

      <Footer />
    </>
  )
}

export async function getStaticProps(ctx) {
  const res = await fetch('https://api.github.com/repos/estevanmaito/windmill-dashboard/tags')
  const lastRelease = await res.json()

  return {
    props: { lastRelease: lastRelease[0] },
  }
}
