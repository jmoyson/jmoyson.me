import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:px-8 space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-3xl font-medium text-gray-900">
          Hey 👋 I&apos;m Jeremy,
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          <em>Full-time dad, part-time indie maker.</em>
          <br />
          <br />
          <em>
            Sharing what I build, how I build it, and what I learn during my{" "}
            <strong>
              <a href="https://blog.jmoyson.me" target="_blank">
                Three Hours a Night
              </a>
            </strong>{" "}
            build sessions, once the kids are asleep.
          </em>
        </p>
      </div>

      <div className="space-y-2 ml-4">
        <div className="text-gray-700">
          →{" "}
          <a
            href="https://blog.jmoyson.me"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 underline"
          >
            See all posts
          </a>
        </div>
        <div className="text-gray-700">
          →{" "}
          <a
            href="https://blog.jmoyson.me/subscribe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 underline"
          >
            Subscribe to newsletter
          </a>
        </div>
      </div>

      {/* Projects */}
      <div className="space-y-4">
        <h2 className="text-gray-700 font-bold text-lg">
          🛠️ Projects I&apos;m <em>slowly</em> building:
        </h2>
        <ul className="space-y-3 text-gray-700 ml-8 list-disc">
          <li>
            ♣️{" "}
            <a
              href="https://indieaffiliate.club"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 underline font-bold"
            >
              IndieAffiliate.Club
            </a>{" "}
            - A dev-first affiliate discovery lab
          </li>
        </ul>
        <p className="text-gray-600 italic text-sm">
          More coming... Slowly built. Sometimes useful. Sometimes not.
        </p>
      </div>

      {/* Stack */}
      <div className="space-y-4">
        <h2 className="text-gray-700 font-bold text-lg">🧰 Tools I use:</h2>
        <ul className="space-y- text-gray-700 ml-8 list-disc">
          <li>
            <Link
              href="https://notion.so"
              className="text-blue-500 hover:text-blue-600 underline font-bold"
            >
              Notion
            </Link>{" "}
            for planning & writing
          </li>
          <li>
            <Link
              href="https://beehiiv.com"
              className="text-blue-500 hover:text-blue-600 underline font-bold"
            >
              Beehiiv
            </Link>{" "}
            for newsletter & posts
          </li>
          <li>
            <Link
              href="https://nextjs.org"
              className="text-blue-500 hover:text-blue-600 underline font-bold"
            >
              Next.js
            </Link>{" "}
            for projects & sites
          </li>
          <li>
            <Link
              href="https://vercel.com"
              className="text-blue-500 hover:text-blue-600 underline font-bold"
            >
              Vercel
            </Link>{" "}
            for fast, simple hosting
          </li>
        </ul>
      </div>

      {/* Contact */}
      <div className="space-y-4">
        <p className="text-gray-700">
          <strong>Find me:</strong>
        </p>
        <div className="ml-4 text-gray-700">
          <p>
            <a
              href="mailto:jeremy@jmoyson.me"
              className="text-blue-500 hover:text-blue-600 underline"
            >
              jeremy@jmoyson.me
            </a>{" "}
            /{" "}
            <a
              href="https://x.com/jeremymoyson"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 underline"
            >
              @jeremymoyson
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
