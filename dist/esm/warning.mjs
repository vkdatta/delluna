export const name="warning";
export const id="dl_8a6a3461b0e0230fc232";
export const url=new URL("../icons/warning.svg?v=6c4d53c1ff016740867a9640850fb6080ffb55ac0da29eff32258179a1790dca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
