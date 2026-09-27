export const name="sms";
export const id="dl_8b189d84ab77124bb810";
export const url=new URL("../icons/sms.svg?v=169facc995161a2510360d1aa297bd1433e712bd502d65128e9f125579d94cdf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
