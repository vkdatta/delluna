export const name="cards_star-fill";
export const id="dl_c1f4299c9b7073c8cd0d";
export const url=new URL("../icons/cards_star-fill.svg?v=bccd9c5db2fd9f78cfe27870097584e83e747a0758871498401b910f5d298d36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
