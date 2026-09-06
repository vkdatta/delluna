export const name="cross-bold";
export const id="dl_22302209a4614a1bb538";
export const url=new URL("../icons/cross-bold.svg?v=1596e7f2e11b29cb4585ca480f70c2ed5edd5cbadc4bf69b0ddd7efc66a8fa75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
