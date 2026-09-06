export const name="farm-duotone";
export const id="dl_818673b0fc4b4e7fa2f4";
export const url=new URL("../icons/farm-duotone.svg?v=3ad619298e5d5857d38884fe7b4e8068974150bedc88dcd2b285d62a250670bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
