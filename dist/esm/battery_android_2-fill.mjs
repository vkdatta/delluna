export const name="battery_android_2-fill";
export const id="dl_47b4b6dbf1322466ecac";
export const url=new URL("../icons/battery_android_2-fill.svg?v=4ecedf6897dbc5707207248d6f2411263902b24aeb82c804d2dcc20f1f1ea5e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
