export const name="diversity_3-fill";
export const id="dl_a208423a2a38487bbab1";
export const url=new URL("../icons/diversity_3-fill.svg?v=d0105525c1952bebbe5bb1ce6151de16167793ba293a869f98e3450641325f0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
