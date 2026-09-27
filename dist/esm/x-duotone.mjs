export const name="x-duotone";
export const id="dl_08c4bcbd102547a8e18b";
export const url=new URL("../icons/x-duotone.svg?v=eb0180405f0c2aa79a7058dac91b22758522e74af31891df350d0ca788c69203",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
