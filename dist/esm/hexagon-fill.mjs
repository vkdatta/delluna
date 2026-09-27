export const name="hexagon-fill";
export const id="dl_87992386f1f142139aea";
export const url=new URL("../icons/hexagon-fill.svg?v=d62ae32dc825d23bd751f5ef044d3c3d33641302d1c31acef7ce3261106fed3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
