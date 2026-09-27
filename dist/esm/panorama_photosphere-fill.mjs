export const name="panorama_photosphere-fill";
export const id="dl_cd494da50bb3a9beeffc";
export const url=new URL("../icons/panorama_photosphere-fill.svg?v=11ac4751198da2f0aa1ff2192c0dca1abf387c120f07eb415bacc1ee2c3ba456",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
