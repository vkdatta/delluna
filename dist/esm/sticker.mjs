export const name="sticker";
export const id="dl_50259962fd3048a1887e";
export const url=new URL("../icons/S/sticker.svg?v=7379d82ae678fe74e65cb01680c5df319e8b4aa05f5ecc02f3c483c681962faf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
