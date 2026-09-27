export const name="campfire-bold";
export const id="dl_b653ed9af3ce4adbad60";
export const url=new URL("../icons/campfire-bold.svg?v=57a1fccdfcd6f05af6e6170837809be2e7aefc717f7d4c457e23809365869f4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
