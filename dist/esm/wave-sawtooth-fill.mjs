export const name="wave-sawtooth-fill";
export const id="dl_961e4fa30e8014f3327c";
export const url=new URL("../icons/wave-sawtooth-fill.svg?v=9a64125ca080640eeb2535d8b2999745a9ef4bbcf4289fe1e35389395a832c6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
