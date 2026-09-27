export const name="list-fill";
export const id="dl_e5b11b2013564272b5c0";
export const url=new URL("../icons/list-fill.svg?v=ab16bcf2917dc3f75d6ce26a890c8fcb8415e694f346c81eab94cab8d3e016a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
