export const name="sneaker-move-bold";
export const id="dl_9bc038a4d80451257c0c";
export const url=new URL("../icons/sneaker-move-bold.svg?v=2374c5d8e66a58086babf51c4cf71b583abf760519e35742ca8b8cdb777a188c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
