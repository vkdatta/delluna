export const name="route-fill";
export const id="dl_cec08d3d779450f6fcaa";
export const url=new URL("../icons/route-fill.svg?v=ab4f586dfd5c1d0e7024d2753f61f4c2e1fe885c6f4c709a42d800cbac41c25d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
