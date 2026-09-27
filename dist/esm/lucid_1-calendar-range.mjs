export const name="lucid_1-calendar-range";
export const id="dl_1a045a4b908e4ece984d";
export const url=new URL("../icons/lucid_1-calendar-range.svg?v=0c125a26273c84ba68a3751032670fe1abfd68654ce89919134a76343fd21107",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
