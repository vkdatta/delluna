export const name="battery_android_1-fill";
export const id="dl_81b983c770469330e67b";
export const url=new URL("../icons/battery_android_1-fill.svg?v=9b4a33fe6131e02d701e06286f164a8d258ac8d55306196c2f5e5ec64c496c48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
