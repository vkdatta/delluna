export const name="speaker";
export const id="dl_5cdde0bbc5988eced29e";
export const url=new URL("../icons/speaker.svg?v=94c027b67ac785e538bea61cefeefce716bc119a6e1282dfe8147ec184f2a830",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
