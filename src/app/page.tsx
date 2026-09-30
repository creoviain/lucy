import {
  Anatomy,
  ApplicationsStrip,
  Automation,
  Components,
  Enquiry,
  FabricMarquee,
  Hero,
  MachinesGrid,
  Manufacturing,
  Milestones,
  Origin,
  RelaxSpecs,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <FabricMarquee />
      <Origin />
      <Milestones />
      <MachinesGrid />
      <Anatomy />
      <Automation />
      <RelaxSpecs />
      <Components />
      <Manufacturing />
      <ApplicationsStrip />
      <Enquiry />
    </>
  );
}
