import ServiceDetailsClient from "./ServiceDetailsClient";

export default async function ServiceDetails({ params }) {
  const { id } = await params;
  console.log(id);
  return <ServiceDetailsClient id={id} />;
}
