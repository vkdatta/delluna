export const name="dermatology-fill";
export const id="dl_de2c55fad8af4961a94c";
export const url=new URL("../icons/D/dermatology-fill.svg?v=68cd34d842ce02a7c18ec3df4b2917ea687ce76d1dbb591f069554253ced2d33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
