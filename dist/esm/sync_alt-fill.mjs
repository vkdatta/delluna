export const name="sync_alt-fill";
export const id="dl_750bc052705fb73fb4b1";
export const url=new URL("../icons/sync_alt-fill.svg?v=933ebc8306f571f39916860adb51bc638afd498c059210a79e5fed0a8c59fa16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
