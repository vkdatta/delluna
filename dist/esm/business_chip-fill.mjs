export const name="business_chip-fill";
export const id="dl_906ccb7b3cc3eab63584";
export const url=new URL("../icons/business_chip-fill.svg?v=511203f3ead78823129969c88181c04df3266a0b39a33d1da4e4fb474af157c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
