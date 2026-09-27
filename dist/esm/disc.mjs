export const name="disc";
export const id="dl_74d94723aae64d23b837";
export const url=new URL("../icons/disc.svg?v=ff14afa243e170a15f0ed614644695ce263eb28e377e9e39a9676953a4a1d238",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
