export const name="campfire-bold";
export const id="dl_b653ed9af3ce4adbad60";
export const url=new URL("../icons/campfire-bold.svg?v=dc7456b5970f3cb7827db011264b9f22a04540f4c0e6f82944b922010552a94d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
