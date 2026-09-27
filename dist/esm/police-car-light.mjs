export const name="police-car-light";
export const id="dl_36fd8f69c11f40769c8f";
export const url=new URL("../icons/police-car-light.svg?v=ed1e0b31c568afc093092ca1632014a9bf9613b77699075055bcaec33a79177f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
