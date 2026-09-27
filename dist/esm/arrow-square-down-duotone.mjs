export const name="arrow-square-down-duotone";
export const id="dl_de2e7431d4914dd29158";
export const url=new URL("../icons/arrow-square-down-duotone.svg?v=e4b5d3d9a835557c0af1939758a8f21a83fac5a21fb0a5b1e3b684d5783b233d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
