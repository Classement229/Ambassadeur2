import { useMemo } from 'react';
import { X } from 'lucide-react';
import CandidateList from './components/CandidateList';
import { initialCandidates } from './data/initialCandidates';
import logoImg from '../public/WhatsApp Image 2025-11-15 à 15.56.33_05e2a873.jpg';
import logo2Img from '../public/WhatsApp Image 2025-11-19 at 01.25.59.jpeg';
import orImg from '../public/or.png';
import diamantImg from '../public/diamant.png';
import bronzeImg from '../public/bronze.png';
import Footer from "./components/footer";
import myBg from "../public/bg.jpeg";

function App() {
  const sortedCandidates = useMemo(() => {
    return [...initialCandidates].sort((a, b) => {
      if (b.votes !== a.votes) return b.votes - a.votes;
      return a.id - b.id;
    });
  }, []);

  return (
    <div className="min-h-screen relative">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${myBg})`,
          zIndex: -2
        }}
      />
      <div className="fixed inset-0 bg-black/70" style={{ zIndex: -1 }} />

      <div className="relative z-10 container mx-auto px-4 py-12 max-w-5xl">
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-8">
            <img
              src={logoImg}
              alt="Logo 1"
              className="h-24 w-24 md:h-40 md:w-40 object-cover rounded-full border-4 border-white shadow-2xl flex-shrink-0"
            />
            <X size={32} className="text-white flex-shrink-0 md:hidden" strokeWidth={3} />
            <X size={48} className="text-white flex-shrink-0 hidden md:block" strokeWidth={3} />
            <img
              src={logo2Img}
              alt="Logo 2"
              className="h-24 w-24 md:h-40 md:w-40 object-cover rounded-full border-4 border-white shadow-2xl flex-shrink-0"
            />
          </div>

          <h1 className="text-3xl md:text-6xl font-bold text-white text-center leading-tight mb-6">
            Portail Ambassadeur Amapiano Vibes Acte 2
          </h1>

          <p className="text-lg md:text-xl text-white/90 text-center max-w-2xl px-4 leading-relaxed">
           Plateforme officielle de coordination des ambassadeurs du Amapiano Vibes. Suivi des performances, classement des ventes et actions du réseau.
          </p>
        </div>
        <img
            src={orImg}
            alt="or"
            className="h-9 w-9 object-cover rounded-full mb-8 shadow-2xl z-50 absolute top-[23.5%] left-[58%] lg:top-[22.5%] lg:left-[50%]  sm:top-[22.5%]"
          />

            <img
            src={diamantImg}
            alt="or"
            className="h-9 w-9 object-cover rounded-full mb-8 shadow-2xl z-50 absolute top-[27.5%] left-[58%] lg:top-[27%] lg:left-[50%]  sm:top-[27%]"
          />

          <img
            src={bronzeImg}
            alt="or"
            className="h-9 w-9 object-cover rounded-full mb-8 shadow-2xl z-50 absolute top-[31.5%] left-[58%] lg:top-[31.5%] lg:left-[50%] sm:top-[31.5%]"
          />

        <CandidateList candidates={sortedCandidates} />
       <h3 className="text-1xl md:text-2xl font-bold text-center text-white leading-tight mb-6 mt-6 ml-1">
            Nombre total de Tickets vendus : 18 
          </h3> 
        <h3 className="text-1xl md:text-2xl font-bold text-white leading-tight mb-6 mt-6 ml-1">
            Être Ambassadeur du AMAPIANO VIBES ACTE 2 , c’est être le visage et le relais officiel de l’événement. 
          </h3>
         <p className="text-lg md:text-xl text-white/90 max-w-2xl px-4 leading-relaxed ml-1">
         <h2 className="font-bold mb-">Son rôle :</h2>
 <li>inviter son entourage </li> 
<li>créer de petites actions sur ces réseaux</li> 
 <li>représenter l’esprit du concept</li>

          </p>
      </div>
     
<>
      {/* ton contenu ici */}
      <Footer />
    </>
    </div>
   
  );
}

 
export default App;
