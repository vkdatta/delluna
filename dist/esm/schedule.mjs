export const name="schedule";
export const id="dl_f3cd5c9536dcf1f0d69a";
export const url=new URL("../icons/schedule.svg?v=368aa66d386836c83d7566d3903f8ddb9b36a8b6e7389db61fbc4e4435699bb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
