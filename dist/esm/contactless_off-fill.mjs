export const name="contactless_off-fill";
export const id="dl_ba4778b14717f059413c";
export const url=new URL("../icons/contactless_off-fill.svg?v=0dda9949336c0e2e4d57b2ff8b4de262a7fca4e158bfe25452f03f97c4ea420e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
