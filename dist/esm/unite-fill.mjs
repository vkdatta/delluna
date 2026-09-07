export const name="unite-fill";
export const id="dl_923ee65e1db9498fadd3";
export const url=new URL("../icons/U/unite-fill.svg?v=5784f43eab672933ece23899f408f6accee06b50299afb28aa812c80eb6662a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
