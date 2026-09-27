export const name="intersect-light";
export const id="dl_ce4c6623c1994684b82e";
export const url=new URL("../icons/intersect-light.svg?v=4785428539e1022ed205b47ae182006b39f6b5f1bc69a9644a663c03e4308b0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
