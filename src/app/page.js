import Image from "next/image";
import {
  Noto_Serif_Display,
  Playfair_Display,
  Quattrocento,
} from "next/font/google";
const noto_serif_display = Noto_Serif_Display({
  weight: "700",
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const playfair_display = Playfair_Display({
  weight: "700",
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const quattrocento = Quattrocento({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const palettecolor = ["16,16,16,1", "25,25,25,1", "110,110,110", "68,68,68,.2"];

export default function Home() {
  return (
    <div className="app container mx-auto relative">
      <header className={`absolute text-white w-full py-4`}>
        {/* <nav className="relative">
          <ul className=" navigation flex justify-between">
            <li>NOSOTROS</li>
            <li>CATALOGO</li>
            <li className={`text-4xl absolute left-1/2 translate-x-[-50%] ${noto_serif_display.className}`}>
              <a href="">KPR</a>
            </li>
            <li>LOREM IPSUM</li>
            <li>LOREM IPSUM</li>
          </ul>
        </nav> */}
        <nav className="grid grid-cols-[1fr_auto_1fr]">
          <ul className="flex items-center gap-4 justify-center">
            <li>
              <a href="">nosotros</a>
            </li>
            <li>
              <a href="">catalogo</a>
            </li>
          </ul>
          <ul>
            <li>
              <a
                href=""
                className={`px-6 text-3xl ${noto_serif_display.className}`}
              >
                KPR
              </a>
            </li>
          </ul>
          <ul className="flex items-center gap-4 justify-center">
            <li>
              <a href="">contactenos</a>
            </li>
            <li>
              <a href="">redes sociales</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="first-section flex justify-center items-center h-screen">
          <div className="banner flex flex-col justify-center items-center w-9/12">
            <h1
              className={`text-white text-6xl mb-2 ${playfair_display.className}`}
            >
              KPR
            </h1>
            <h1
              className={`text-white text-6xl mb-2 ${playfair_display.className}`}
            >
              PERU
            </h1>
            <h1
              className={`text-white text-6xl mb-2 ${playfair_display.className}`}
            >
              ROCKS & GEMS
            </h1>
            <p
              className={` text-white w-3/5 text-center py-10 ${quattrocento.className}`}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              saepe perspiciatis, aliquid aperiam asperiores labore nobis
              mollitia deleniti nulla suscipit nesciunt tenetur optio libero
              placeat officiis. Veritatis perferendis iusto a.
            </p>
            <div className="actions text-center">
              <p className="text-white mb-4">Lorem ipsum, dolor sit amet. </p>
              <button className="text-white rounded-3xl border-white border px-10 py-2">
                catalogo
              </button>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h1 className="text-white text-4xl text-center mb-10">Descubre el tesoro de Peru</h1>
            <video>
              <source src="./amatista-video.mp4" />
            </video>
          </div>
        </section>
        <section className="pruductos-section px-8 py-8 text-white">
          <h1 className="text-4xl text-center text-white mb-10">
            Nuestros Productos
          </h1>
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="card  max-w-xs rounded-md px-4 py-4 bg-[rgb(21,21,21)] border border-[rgba(68,68,68,.4)]">
              <picture>
                <img src="/rocas.jpeg" className="rounded-md" alt="" />
              </picture>
              <h1 className="text-center text-2xl text-[rgba(238,238,238,1)]">
                ROCAS
              </h1>
              <p className="text-center text-[rgba(171,171,171,1)]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                odit, in dicta consequuntur{" "}
              </p>
              <button className="text-white">ver mas</button>
            </div>
            <div className="card  max-w-xs rounded-md px-4 py-4 bg-[rgb(21,21,21)] border border-[rgba(68,68,68,.2)]">
              <picture>
                <img src="/rocas.jpeg" className="rounded-md" alt="" />
              </picture>
              <h1 className="text-center text-2xl">ROCAS</h1>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                odit, in dicta consequuntur{" "}
              </p>
              <button className="text-white">ver mas</button>
            </div>
            <div className="card  max-w-xs rounded-md px-4 py-4 bg-[rgb(21,21,21)] border border-[rgba(68,68,68,.2)]">
              <picture>
                <img src="/rocas.jpeg" className="rounded-md" alt="" />
              </picture>
              <h1 className="text-center text-2xl">ROCAS</h1>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                odit, in dicta consequuntur{" "}
              </p>
              <button className="text-white">ver mas</button>
            </div>
          </div>
        </section>
      </main>
      <footer>
        footer
        <img src="/fondo.png" alt="" />
      </footer>
    </div>
  );
}
