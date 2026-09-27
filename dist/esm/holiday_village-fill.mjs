export const name="holiday_village-fill";
export const id="dl_10feb3e40bde67fccaed";
export const url=new URL("../icons/holiday_village-fill.svg?v=a108ca607aeba083fd41c437d63691975cc520d113f52953df9de650d7729869",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
