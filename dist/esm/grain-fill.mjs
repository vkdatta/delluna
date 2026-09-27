export const name="grain-fill";
export const id="dl_4605e5eb452c0b3f6793";
export const url=new URL("../icons/grain-fill.svg?v=0684e16092661f475445059a271c9e8d5c2481bcfa012f69c171d35f7019085e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
