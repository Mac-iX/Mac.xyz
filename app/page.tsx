"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Mail,
  Calendar,
  Menu,
  X,
  Brain,
  Users,
  Lightbulb,
  Target,
  Award,
  Heart,
  Sparkles,
  Zap,
  FileText,
  BarChart3,
  ChevronDown,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showStickyCTA, setShowStickyCTA] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [openPackages, setOpenPackages] = useState<{ [key: number]: boolean }>({})

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollPercentage = scrollPosition / (documentHeight - windowHeight)

      setShowStickyCTA(scrollPercentage > 0.3)
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const bookingURL = "https://calendar.google.com/bookings/s/YOUR_UNIQUE_LINK"

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white relative overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-transparent to-amber-900/20"></div>

        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-teal-400/5 rounded-full blur-2xl animate-bounce delay-500"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Mouse Follower */}
      <div
        className="fixed w-6 h-6 bg-gradient-to-r from-teal-400 to-amber-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${showStickyCTA ? 1.5 : 1})`,
        }}
      ></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-xl border-b border-teal-500/20 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent">
              Michael Anthony Carter
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Work With Me", "Offerings", "Credentials"].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, "-"))}
                  className="text-gray-300 hover:text-teal-400 transition-all duration-300 hover:glow-text relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-amber-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
              <button
                onClick={() => scrollToSection("final-cta")}
                className="bg-gradient-to-r from-teal-500 to-amber-500 text-black px-6 py-2 rounded-full hover:from-teal-400 hover:to-amber-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25"
              >
                Book a Call
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-teal-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-teal-500/20 animate-in slide-in-from-top duration-300">
              <div className="flex flex-col space-y-4 mt-4">
                {["Home", "About", "Work With Me", "Offerings", "Credentials"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, "-"))}
                    className="text-left text-gray-300 hover:text-teal-400 transition-colors"
                  >
                    {item}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection("final-cta")}
                  className="bg-gradient-to-r from-teal-500 to-amber-500 text-black px-6 py-2 rounded-full hover:from-teal-400 hover:to-amber-400 transition-all duration-300 text-left"
                >
                  Book a Call
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 relative">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-8 animate-in fade-in duration-1000">
            <p className="text-xl text-transparent bg-gradient-to-r from-teal-400 via-amber-400 to-teal-400 bg-clip-text mb-4 animate-pulse">
              Systems Strategist. Soul-Tech Visionary. Pattern Integrity Builder.
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-in slide-in-from-bottom duration-1000 delay-200">
            <span className="text-white">Where Soul Meets System — </span>
            <span className="bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent">
              Build Startups That Scale With Integrity
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed animate-in slide-in-from-bottom duration-1000 delay-400">
            From chaos to clarity. From vision to execution. I help founders and teams architect systems that grow with
            soul, strategy, and sovereignty—backed by deep AI expertise and regenerative business thinking.
          </p>

          <div className="animate-in slide-in-from-bottom duration-1000 delay-600">
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-amber-500 hover:from-teal-400 hover:to-amber-400 text-black px-10 py-6 text-xl rounded-full transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-teal-500/25 relative overflow-hidden group"
              onClick={() => window.open(bookingURL, "_blank")}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Calendar className="mr-3 relative z-10" size={24} />
              <span className="relative z-10">Book a 2-Hour Strategic Alignment Session</span>
              <Sparkles className="ml-3 relative z-10 animate-spin" size={20} />
            </Button>
          </div>

          <p className="text-sm text-gray-400 mt-6 animate-in fade-in duration-1000 delay-800">
            Deep strategic work requires real time. Let's create actual transformation together.
          </p>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-teal-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-teal-300 rounded-full animate-bounce"></div>
      </section>

      {/* About Michael */}
      <section id="about" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 to-gray-800/50"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent">About Mac</span>
          </h2>

          <div className="prose prose-lg max-w-none text-gray-300 leading-relaxed">
            <Card className="bg-slate-800/50 border-teal-500/20 backdrop-blur-sm hover:border-teal-400/40 transition-all duration-500 hover:shadow-xl hover:shadow-teal-500/10">
              <CardContent className="p-8">
                <p className="text-xl mb-6 text-gray-200">
                  I'm Michael Anthony Carter — known as <span className="text-teal-400 font-semibold">Mac</span>. I'm a
                  Systems Strategist, AI Consultant, and Fractional CSO who helps early-stage startups navigate AI
                  integration, team growth, and identity formation while maintaining their deeper mission.
                </p>

                <p className="mb-6 text-gray-300">
                  From internal ops architecture to brand narrative systems, my work bridges the gap between visionary
                  thinking and executable strategy. I serve as a mirror, architect, and operator—turning startup chaos
                  into scalable systems.
                </p>

                <div className="bg-gradient-to-r from-teal-900/30 to-amber-900/30 p-6 rounded-lg mb-6 border border-teal-500/20">
                  <h3 className="text-xl font-semibold text-teal-400 mb-4 flex items-center">
                    <Zap className="mr-2" size={20} />
                    What I Do:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start text-gray-300">
                      <span className="text-teal-400 mr-3">▸</span>
                      Empower individuals, teams, and startups to integrate AI tools and automation systems with clarity
                      and creativity (ChatGPT, Grok, Gemini, Perplexity, v0, Midjourney, Kling, RunwayML, Canva etc.)
                    </li>
                    <li className="flex items-start text-gray-300">
                      <span className="text-amber-400 mr-3">▸</span>
                      Design human-centered workflows and prompt architectures tailored to each client's real-world
                      goals
                    </li>
                    <li className="flex items-start text-gray-300">
                      <span className="text-teal-400 mr-3">▸</span>
                      Architect authentic brand ecosystems rooted in story, symbolism, and strategic foresight
                    </li>
                    <li className="flex items-start text-gray-300">
                      <span className="text-amber-400 mr-3">▸</span>
                      Guide founders, educators, and creatives in aligning their voice, values, and visual identity
                      across platforms
                    </li>
                    <li className="flex items-start text-gray-300">
                      <span className="text-teal-400 mr-3">▸</span>
                      Mentor soul-driven professionals in weaving technology with intuition—bridging the digital and the
                      sacred
                    </li>
                    <li className="flex items-start text-gray-300">
                      <span className="text-amber-400 mr-3">▸</span>
                      Build scalable training programs and content frameworks that teach AI fluency, system thinking,
                      and pattern recognition
                    </li>
                  </ul>
                </div>

                <p className="text-center">
                  <a
                    href="mailto:QualityCreativeNC@gmail.com"
                    className="text-teal-400 hover:text-amber-400 font-medium transition-colors duration-300 inline-flex items-center group"
                  >
                    <Mail className="mr-2 group-hover:animate-bounce" size={16} />
                    QualityCreativeNC@gmail.com
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who I Work With */}
      <section id="work-with-me" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent">
              Who I Work With
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Seed to Series B Startups",
                description: "Navigating early-stage growth and system design.",
                goal: "Need strategic clarity and AI integration without losing their mission.",
                color: "teal",
              },
              {
                icon: Heart,
                title: "Mission-Driven Founders",
                description: "Aligning business with purpose and values.",
                goal: "Want systems and tech that amplify their mission without losing authenticity.",
                color: "amber",
              },
              {
                icon: Lightbulb,
                title: "Purpose-Driven Executives",
                description: "Integrating AI and integrity into leadership.",
                goal: "Seek to modernize operations while maintaining human-centered values.",
                color: "teal",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-teal-500/20 backdrop-blur-sm hover:border-teal-400/40 transition-all duration-500 hover:shadow-xl hover:shadow-teal-500/10 group hover:scale-105"
              >
                <CardContent className="p-8">
                  <item.icon
                    className={`w-16 h-16 ${item.color === "teal" ? "text-teal-400" : "text-amber-400"} mb-6 group-hover:animate-pulse`}
                  />
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 mb-6">{item.description}</p>
                  <p
                    className={`${item.color === "teal" ? "text-teal-400" : "text-amber-400"} font-medium flex items-start`}
                  >
                    <span className="mr-2">➡</span>
                    {item.goal}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What I Help You With */}
      <section id="offerings" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 to-gray-800/50"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent">
              What I Help You With
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI Systems Integration",
                description: "Turn AI chaos into competitive advantage with strategic tool implementation.",
                color: "teal",
              },
              {
                icon: Target,
                title: "Narrative Architecture",
                description: "Brand identity and messaging frameworks that scale with your growth.",
                color: "amber",
              },
              {
                icon: Users,
                title: "Team Interface & Clarity",
                description: "Translate between founders, ops, and engineers. Help people do the right work.",
                color: "teal",
              },
              {
                icon: Lightbulb,
                title: "Vision-to-Execution Frameworks",
                description: "Architect your 'why' into something repeatable and scalable.",
                color: "amber",
              },
              {
                icon: FileText,
                title: "Brand Identity Guidelines",
                description: "Comprehensive brand systems with visual identity, voice, and strategic positioning.",
                color: "teal",
              },
              {
                icon: BarChart3,
                title: "Quality Creative Process",
                description:
                  "Quantitative & qualitative research methods with human-in-the-loop vibe code interactive reports.",
                color: "amber",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-teal-500/20 backdrop-blur-sm hover:border-amber-400/40 transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/10 group hover:scale-105"
              >
                <CardContent className="p-8">
                  <item.icon
                    className={`w-16 h-16 ${item.color === "teal" ? "text-teal-400" : "text-amber-400"} mb-6 group-hover:animate-pulse`}
                  />
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic CTA - Mid-Page with Tech Background */}
      <section className="py-16 px-6 relative overflow-hidden">
        {/* Tech Network Background */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/tech-network-bg.gif"
            alt=""
            className="w-full h-full object-cover"
            style={{ filter: "hue-rotate(180deg) brightness(0.7)" }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/80"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <Card className="bg-gradient-to-r from-teal-900/40 to-amber-900/40 border-teal-400/30 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-amber-500/5 animate-pulse"></div>
            <CardContent className="p-8 text-center relative z-10">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-teal-400 to-amber-400 rounded-full flex items-center justify-center animate-glow">
                  <Sparkles className="w-10 h-10 text-black animate-spin" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Turn AI Chaos Into Competitive Advantage?</h3>
              <p className="text-xl text-gray-300 mb-8">
                Most startups are drowning in AI tools. I help you architect systems that actually scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-500 to-amber-500 hover:from-teal-400 hover:to-amber-400 text-black px-8 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl"
                  onClick={() => window.open(bookingURL, "_blank")}
                >
                  <Calendar className="mr-3" size={20} />
                  Start with $500 Strategy Session
                </Button>
                <div className="text-sm text-gray-400">
                  <span className="text-teal-400">✓</span> 2-hour deep dive
                  <span className="mx-2">•</span>
                  <span className="text-amber-400">✓</span> Immediate clarity
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing & Packages */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent">
              Investment & Packages
            </span>
          </h2>

          <div className="grid lg:grid-cols-1 gap-12">
            {/* Strategic Packages */}
            <div>
              <h3 className="text-3xl font-bold text-teal-400 mb-8 text-center">Strategic Packages</h3>
              <div className="space-y-6">
                {[
                  {
                    name: "2-Hour Strategic Alignment Session",
                    price: "$500",
                    description:
                      "Rapid clarity and strategic diagnosis. Live 2-hour consult with tailored recommendations and optional roadmap.",
                    duration: "2 hours",
                    details: {
                      whatYouGet: [
                        "Live 2-hour strategic deep dive session",
                        "Immediate diagnosis of your biggest bottlenecks",
                        "Tailored AI tool recommendations for your specific use case",
                        "Optional 30-day roadmap with prioritized action items",
                        "Follow-up email summary with key insights and next steps",
                      ],
                      perfectFor: [
                        "Founders who need rapid clarity on AI strategy",
                        "Teams drowning in tool chaos",
                        "Startups ready to make strategic AI decisions quickly",
                      ],
                      outcome:
                        "Walk away knowing exactly which AI tools to implement first and how to integrate them strategically.",
                    },
                  },
                  {
                    name: "Strategic Systems Audit",
                    price: "$5,000",
                    description:
                      "Comprehensive diagnosis of brand, tech stack, workflows, and content systems with actionable roadmap.",
                    duration: "~1 week",
                    details: {
                      whatYouGet: [
                        "Complete audit of current tech stack and workflows",
                        "Brand messaging and positioning analysis",
                        "AI integration opportunities assessment",
                        "Team communication and process evaluation",
                        "Detailed 90-day implementation roadmap",
                        "2-hour presentation of findings and recommendations",
                        "30-day follow-up check-in included",
                      ],
                      perfectFor: [
                        "Series A+ startups with established operations",
                        "Teams experiencing growing pains and system breakdowns",
                        "Founders who want comprehensive strategic clarity before major decisions",
                      ],
                      outcome:
                        "Complete strategic clarity with a proven roadmap that your team can execute immediately.",
                    },
                  },
                  {
                    name: "Executive Consulting Retainer",
                    price: "$10,000/month",
                    description:
                      "Ongoing strategic presence—your second brain, foresight engine, and high-trust operator.",
                    duration: "Monthly",
                    details: {
                      whatYouGet: [
                        "Weekly 2-hour strategic sessions",
                        "Unlimited Google Workspace & SMS communications for quick decisions",
                        "Monthly team training on AI tools and workflows",
                        "Quarterly strategic planning and goal alignment",
                        "Brand and messaging guidance as you scale",
                        "AI tool evaluation and implementation support",
                        "Crisis management and rapid problem-solving",
                        "Access to my network of specialists and vendors",
                      ],
                      perfectFor: [
                        "Fast-growing startups (Series A to Series B)",
                        "Founders who need a strategic thinking partner",
                        "Teams scaling rapidly and need ongoing systems optimization",
                      ],
                      outcome:
                        "Your startup operates with the strategic clarity and systems integrity of a much larger company.",
                    },
                  },
                  {
                    name: "All-Inclusive Systems Build",
                    price: "Starting at $25,000",
                    description: "Complete ecosystem transformation: brand, tech, messaging, AI, and ops integration.",
                    duration: "30-90 days",
                    featured: true,
                    details: {
                      whatYouGet: [
                        "Complete brand identity system (visual, voice, positioning)",
                        "AI workflow architecture and implementation",
                        "Team training and onboarding systems",
                        "Content strategy and production frameworks",
                        "Customer journey mapping and optimization",
                        "Internal ops documentation and process design",
                        "Tech stack integration and automation setup",
                        "90-day post-launch support and optimization",
                      ],
                      perfectFor: [
                        "Well-funded startups ready for complete transformation",
                        "Companies preparing for major growth phases",
                        "Teams who want everything built right the first time",
                      ],
                      outcome:
                        "Your startup operates like a well-oiled machine with systems that scale seamlessly as you grow.",
                    },
                  },
                ].map((pkg, index) => (
                  <Card
                    key={index}
                    className={`${pkg.featured ? "bg-gradient-to-r from-amber-900/30 to-teal-900/30 border-amber-400/40" : "bg-slate-800/50 border-teal-500/20"} backdrop-blur-sm hover:border-teal-400/60 transition-all duration-500 hover:shadow-xl hover:shadow-teal-500/10 group`}
                  >
                    <CardContent className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-white group-hover:text-teal-400 transition-colors">
                            {pkg.name}
                          </h4>
                          <p className="text-sm text-gray-400 mt-1">{pkg.duration}</p>
                        </div>
                        <span className={`text-3xl font-bold ${pkg.featured ? "text-amber-400" : "text-teal-400"}`}>
                          {pkg.price}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-4">{pkg.description}</p>

                      {pkg.featured && (
                        <div className="mb-4 text-sm text-amber-400 font-medium flex items-center">
                          <Sparkles className="mr-2" size={16} />
                          Most Comprehensive Package
                        </div>
                      )}

                      <button
                        onClick={() => setOpenPackages({ ...openPackages, [index]: !openPackages[index] })}
                        className="flex items-center justify-between w-full text-left text-teal-400 hover:text-amber-400 transition-colors duration-300 font-medium"
                      >
                        <span>Learn More About This Package</span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ${openPackages[index] ? "rotate-180" : ""}`}
                        />
                      </button>

                      {openPackages[index] && (
                        <div className="mt-6 space-y-6 animate-in slide-in-from-top duration-300">
                          <div>
                            <h5 className="text-lg font-semibold text-white mb-3 flex items-center">
                              <Target className="mr-2 text-teal-400" size={18} />
                              What You Get:
                            </h5>
                            <ul className="space-y-2">
                              {pkg.details.whatYouGet.map((item, idx) => (
                                <li key={idx} className="flex items-start text-gray-300">
                                  <span className="text-teal-400 mr-3 mt-1">▸</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h5 className="text-lg font-semibold text-white mb-3 flex items-center">
                              <Users className="mr-2 text-amber-400" size={18} />
                              Perfect For:
                            </h5>
                            <ul className="space-y-2">
                              {pkg.details.perfectFor.map((item, idx) => (
                                <li key={idx} className="flex items-start text-gray-300">
                                  <span className="text-amber-400 mr-3 mt-1">▸</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-gradient-to-r from-teal-900/20 to-amber-900/20 p-4 rounded-lg border border-teal-500/20">
                            <h5 className="text-lg font-semibold text-white mb-2 flex items-center">
                              <Sparkles className="mr-2 text-amber-400" size={18} />
                              Expected Outcome:
                            </h5>
                            <p className="text-gray-300 italic">{pkg.details.outcome}</p>
                          </div>

                          <div className="text-center pt-4">
                            <Button
                              className="bg-gradient-to-r from-teal-500 to-amber-500 hover:from-teal-400 hover:to-amber-400 text-black px-6 py-2 rounded-full transform hover:scale-105 transition-all duration-300"
                              onClick={() => window.open(bookingURL, "_blank")}
                            >
                              <Calendar className="mr-2" size={16} />
                              Book This Package
                            </Button>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Ideal Client Profile */}
            <div className="mt-16">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent">
                  Ideal Client Profile
                </span>
              </h3>
              <Card className="bg-slate-800/50 border-teal-500/20 backdrop-blur-sm hover:border-teal-400/40 transition-all duration-500">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                      <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-teal-400" />
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-3">You're Growing Fast</h4>
                      <p className="text-gray-300">
                        Seed to Series B startup with real traction but systems are breaking down
                      </p>
                    </div>
                    <div>
                      <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Heart className="w-8 h-8 text-amber-400" />
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-3">Mission-Driven</h4>
                      <p className="text-gray-300">
                        You want to scale without losing your soul or compromising your values
                      </p>
                    </div>
                    <div>
                      <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Zap className="w-8 h-8 text-teal-400" />
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-3">Ready for AI</h4>
                      <p className="text-gray-300">
                        You know AI is the future but need strategic implementation, not just tools
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Dynamic CTA - Pre-Credentials */}
            <div className="mt-16">
              <Card className="bg-slate-800/30 border-amber-500/30 backdrop-blur-sm relative overflow-hidden group hover:border-amber-400/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                      <h4 className="text-2xl font-bold text-white mb-2">Sound Like Your Startup?</h4>
                      <p className="text-gray-300 text-lg">
                        Let's architect your AI systems with soul and strategic integrity.
                      </p>
                      <div className="flex items-center justify-center md:justify-start mt-4 space-x-6 text-sm">
                        <div className="flex items-center text-teal-400">
                          <Zap className="w-4 h-4 mr-2" />
                          Rapid Implementation
                        </div>
                        <div className="flex items-center text-amber-400">
                          <Heart className="w-4 h-4 mr-2" />
                          Mission Preserved
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center space-y-3">
                      <Button
                        className="bg-gradient-to-r from-amber-500 to-teal-500 hover:from-amber-400 hover:to-teal-400 text-black rounded-full px-8 py-3 whitespace-nowrap transform hover:scale-105 transition-all duration-300"
                        onClick={() => window.open(bookingURL, "_blank")}
                      >
                        <Calendar className="mr-2" size={16} />
                        Book Strategic Session
                      </Button>
                      <p className="text-xs text-gray-400">$500 • 2 Hours • Real Results</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* What You Get */}
            <div className="mt-16">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent">
                  What You Get
                </span>
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-slate-800/50 border-teal-500/20 backdrop-blur-sm hover:border-teal-400/40 transition-all duration-500 hover:shadow-xl hover:shadow-teal-500/10 group hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Target className="w-8 h-8 text-teal-400 group-hover:animate-pulse" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-4">Immediate Clarity & Direction</h4>
                    <p className="text-gray-300">
                      Walk away from every session knowing exactly what to do next and why it matters
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-amber-500/20 backdrop-blur-sm hover:border-amber-400/40 transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/10 group hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FileText className="w-8 h-8 text-amber-400 group-hover:animate-pulse" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-4">Actionable Frameworks You Can Implement</h4>
                    <p className="text-gray-300">
                      No fluff—just proven systems and processes your team can execute immediately
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-teal-500/20 backdrop-blur-sm hover:border-teal-400/40 transition-all duration-500 hover:shadow-xl hover:shadow-teal-500/10 group hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="w-8 h-8 text-teal-400 group-hover:animate-pulse" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-4">Long-term Strategic Partnership Options</h4>
                    <p className="text-gray-300">
                      From one-time sessions to ongoing retainers—scale our work together as you grow
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Why Startups Choose Mac */}
            <div className="mt-16">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent">
                  Why Startups Choose Mac
                </span>
              </h3>
              <Card className="bg-gradient-to-r from-teal-900/30 to-amber-900/30 border-amber-400/40 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                      <Award className="w-12 h-12 text-teal-400 mx-auto mb-4" />
                      <h4 className="text-xl font-semibold text-white mb-3">Proven Track Record</h4>
                      <p className="text-gray-300">
                        Internal Ops Architect + Lead Prompt Engineer for confidential AI/data startup
                      </p>
                    </div>
                    <div>
                      <Heart className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                      <h4 className="text-xl font-semibold text-white mb-3">Systems That Scale Without Losing Soul</h4>
                      <p className="text-gray-300">
                        Build efficient workflows that support your expression, not suppress it
                      </p>
                    </div>
                    <div>
                      <Lightbulb className="w-12 h-12 text-teal-400 mx-auto mb-4" />
                      <h4 className="text-xl font-semibold text-white mb-3">Strategic Clarity That Drives Execution</h4>
                      <p className="text-gray-300">
                        Turn vision into actionable strategy with frameworks that actually work
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-300 mb-8 text-lg">
              All packages include follow-up support and alignment check-ins to ensure lasting results.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-amber-500 hover:from-teal-400 hover:to-amber-400 text-black px-12 py-6 text-xl rounded-full transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-teal-500/25 relative overflow-hidden group"
              onClick={() => window.open(bookingURL, "_blank")}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Calendar className="mr-3 relative z-10" size={24} />
              <span className="relative z-10">Book Your 2-Hour Strategic Session</span>
              <Sparkles className="ml-3 relative z-10 animate-spin" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Credentials & Philosophy */}
      <section id="credentials" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 to-gray-800/50"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent">
              Credentials & Philosophy
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800/50 border-teal-500/20 backdrop-blur-sm hover:border-amber-400/40 transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/10">
              <CardContent className="p-8">
                <Award className="w-16 h-16 text-amber-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-6">Professional Background</h3>
                <ul className="space-y-3 text-gray-300">
                  {[
                    "BA in Professional Writing & New Media – Grand Canyon University",
                    "Certified in Prompt Engineering (Google, Microsoft, ASU)",
                    "Internal Ops Architect + Lead Prompt Engineer for confidential AI/data startup",
                    "Brand + Knowledge Systems Designer for cybersecurity startup",
                    "Founder/Operator of NCAINews.com and Quality Creative Consulting ecosystem",
                    "Strategic advisor to multiple early-stage startups in AI, cybersecurity, and regenerative tech",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-amber-400 mr-3">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-teal-500/20 backdrop-blur-sm hover:border-teal-400/40 transition-all duration-500 hover:shadow-xl hover:shadow-teal-500/10">
              <CardContent className="p-8">
                <Heart className="w-16 h-16 text-teal-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-6">My Philosophy</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    I believe people don't need more information, they need alignment. I give you the tools and
                    strategy, but you do the work. I help you build efficient workflows that support your expression,
                    not suppress it.
                  </p>
                  <p>
                    <span className="text-transparent bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text font-semibold">
                      AI is not a replacement — it's an amplifier.
                    </span>{" "}
                    My goal is to help people find themselves in their systems, workflows, and brands.
                  </p>
                  <p className="text-sm">
                    <span className="text-teal-400 font-semibold">Soul-Tech Integration:</span> As a lifelong student of
                    mythology, history, philosophy, astrology, numerology, and spiritual practice, my approach
                    integrates symbolic insight with cutting-edge tech strategy. I help clients communicate with their
                    higher self — and with their audience.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="final-cta" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/30 via-slate-900/50 to-amber-900/30"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="text-white">Ready for </span>
            <span className="bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent">
              Strategic Alignment?
            </span>
          </h2>

          <p className="text-2xl text-gray-300 mb-12">
            Book your 2-Hour Strategic Alignment Session — real time for real transformation.
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-teal-500 to-amber-500 hover:from-teal-400 hover:to-amber-400 text-black px-16 py-8 text-2xl rounded-full transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-teal-500/25 relative overflow-hidden group mb-8"
            onClick={() => window.open(bookingURL, "_blank")}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Calendar className="mr-4 relative z-10" size={28} />
            <span className="relative z-10">BOOK YOUR SESSION - $500</span>
            <Sparkles className="ml-4 relative z-10 animate-spin" size={24} />
          </Button>

          <p className="text-gray-300 text-lg">
            Or email me directly:
            <a
              href="mailto:QualityCreativeNC@gmail.com"
              className="text-teal-400 hover:text-amber-400 font-medium ml-3 transition-colors duration-300 inline-flex items-center group"
            >
              <Mail className="mr-2 group-hover:animate-bounce" size={20} />
              QualityCreativeNC@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* Sticky CTA */}
      {showStickyCTA && (
        <div className="fixed bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-xl border-t border-teal-500/30 p-4 shadow-2xl z-40 animate-in slide-in-from-bottom duration-300">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="font-semibold text-white">Ready for Strategic Alignment?</p>
              <p className="text-sm text-gray-400">2 hours for real transformation - $500</p>
            </div>
            <Button
              className="bg-gradient-to-r from-teal-500 to-amber-500 hover:from-teal-400 hover:to-amber-400 text-black rounded-full px-8 py-3 whitespace-nowrap transform hover:scale-105 transition-all duration-300"
              onClick={() => window.open(bookingURL, "_blank")}
            >
              <Calendar className="mr-2" size={16} />
              Book Now
            </Button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-teal-500/20 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-300 text-lg">
            © 2025 Michael Anthony Carter.
            <span className="bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent font-semibold">
              {" "}
              Systems Strategist. Soul-Tech Visionary. Pattern Integrity Builder.
            </span>
          </p>
          <p className="text-gray-500 text-sm mt-3">
            Based in Wilmington, NC • Serving startups, founders, and visionaries worldwide
          </p>
        </div>
      </footer>
    </div>
  )
}
