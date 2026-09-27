export const name="magnification_small-fill";
export const id="dl_d6abf75d1d67fec1ccb8";
export const url=new URL("../icons/magnification_small-fill.svg?v=3c4bf1ceb7cb58bdf3ea26821c18f6827796ff34c8cbec6db392b01550da287b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
