export const name="stripe-logo-duotone";
export const id="dl_6b4f893df3c181314e0e";
export const url=new URL("../icons/stripe-logo-duotone.svg?v=22df6c9a5515900154815bd8a41177588632ee5051beffab89f0731597633229",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
