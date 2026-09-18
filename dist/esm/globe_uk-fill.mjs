export const name="globe_uk-fill";
export const id="dl_bb185939f0404e669e05";
export const url=new URL("../icons/G/globe_uk-fill.svg?v=b397cfb5daf8cb7bf55a4a7a11cc9437ed4fe01020e63c8ab9f422e33c162f00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
