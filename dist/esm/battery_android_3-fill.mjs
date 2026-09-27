export const name="battery_android_3-fill";
export const id="dl_86f51d5a9395e8051d2b";
export const url=new URL("../icons/battery_android_3-fill.svg?v=67dbe473610ff3cfb2088a4bf21cc267c15051218c37a821a641c713d088ec0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
