import HeroSection from '@/components/home/HeroSection';
import ProblemsSection from '@/components/home/ProblemsSection';
import WhatIHelpWithSection from '@/components/home/WhatIHelpWithSection';
import HowIWorkSection from '@/components/home/HowIWorkSection';
import ProofSection from '@/components/home/ProofSection';
import ContactSection from '@/components/home/ContactSection';
import FooterSection from '@/components/home/FooterSection';
import HeaderSection from '@/components/home/HeaderSection';

export default function HomePage() {
	return (
		<>
			<HeaderSection />
			<HeroSection />
			<ProblemsSection />
			<WhatIHelpWithSection />
			<HowIWorkSection />
			<ProofSection />
			<ContactSection />
			<FooterSection />
		</>
	);
}
