export const name="dna-duotone";
export const id="dl_6128df707629449aa8b9";
export const url=new URL("../icons/dna-duotone.svg?v=3fa6a5762a82b286fd40b5a66ec619b97d1e085a20db298710a2db82a1ed307f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
