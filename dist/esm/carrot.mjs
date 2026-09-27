export const name="carrot";
export const id="dl_d8606e65e060401ebcdd";
export const url=new URL("../icons/carrot.svg?v=127b8b0ffb251544db16a66ecab80377f15fe935dfb378fec4d9aa9bf6b69198",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
