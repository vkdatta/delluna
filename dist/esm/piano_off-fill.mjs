export const name="piano_off-fill";
export const id="dl_c711a9b6a07948368c32";
export const url=new URL("../icons/piano_off-fill.svg?v=52deb4af8552ef7587d4afbf2b44668216e11024b100a0f666130c738f36875e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
