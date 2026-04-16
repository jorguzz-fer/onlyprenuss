import OPHeader from "@/components/op/OPHeader";
import OPHero from "@/components/op/OPHero";
import OPMarquee from "@/components/op/OPMarquee";
import OPSobre from "@/components/op/OPSobre";
import OPConteudo from "@/components/op/OPConteudo";
import OPParaQuem from "@/components/op/OPParaQuem";
import OPInstrutores from "@/components/op/OPInstrutores";
import OPDiferenciais from "@/components/op/OPDiferenciais";
import OPPrecos from "@/components/op/OPPrecos";
import OPFAQ from "@/components/op/OPFAQ";
import OPContato from "@/components/op/OPContato";
import OPFooter from "@/components/op/OPFooter";

const Index = () => {
  return (
    <div style={{ background: '#07080E', minHeight: '100vh' }}>
      <OPHeader />
      <OPHero />
      <OPMarquee />
      <OPSobre />
      <OPConteudo />
      <OPParaQuem />
      <OPInstrutores />
      <OPDiferenciais />
      <OPPrecos />
      <OPFAQ />
      <OPContato />
      <OPFooter />
    </div>
  );
};

export default Index;
