export const name="wounds_injuries-fill";
export const id="dl_7abae48ebd854fedde0e";
export const url=new URL("../icons/wounds_injuries-fill.svg?v=0b191353f16560377f07d8b1000ab6e54a7ff45097976221bd915ac200d3e3cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
