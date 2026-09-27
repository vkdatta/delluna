export const name="lucid_2-dna";
export const id="dl_e2b8c97431a448f8b07e";
export const url=new URL("../icons/lucid_2-dna.svg?v=7fb73135afbb0addd96b5ea2b6286e9aa5689edec3a4ce0df00a31b08502fac4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
