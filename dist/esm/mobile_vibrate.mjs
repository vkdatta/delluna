export const name="mobile_vibrate";
export const id="dl_ba391899f8e541c29460";
export const url=new URL("../icons/mobile_vibrate.svg?v=89f6e9cf1d839ac0a94cf016863fe865f4bf99cf18939254cc22a0bace887f1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
