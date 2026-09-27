export const name="lucid_2-file-exclamation-point";
export const id="dl_217e7210f1374096beea";
export const url=new URL("../icons/lucid_2-file-exclamation-point.svg?v=0eb17123041590f01c2a4b80ed64c04a7b1c8195e5d67dada99251b0685e92b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
