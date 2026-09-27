export const name="engine-bold";
export const id="dl_de9ada43448740bfaf29";
export const url=new URL("../icons/engine-bold.svg?v=9a131179e36b6cfd404d87e1bc17694ffeb3a2f1c963786f43966d651da1522f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
