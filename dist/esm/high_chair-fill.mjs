export const name="high_chair-fill";
export const id="dl_e3e572908bd81af864a9";
export const url=new URL("../icons/high_chair-fill.svg?v=f2176d2d6a7ffd0bcadf80102d31ba30b84668894623287edf893eec657b3a9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
