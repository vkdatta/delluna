export const name="number-square-five-fill";
export const id="dl_14f37b372949488b90bc";
export const url=new URL("../icons/number-square-five-fill.svg?v=26e413fe745e914773df9fa22ae5a917d8d0b6ec667df18f2637b2377974eced",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
