export const name="lightstrip-fill";
export const id="dl_d9242d95f97745778f0a";
export const url=new URL("../icons/lightstrip-fill.svg?v=d05c48611cb41554d9287d825205242b03816c797e5c5292df0af5f4b9b9a7a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
