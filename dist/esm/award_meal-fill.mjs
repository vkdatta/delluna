export const name="award_meal-fill";
export const id="dl_aef173bbfb59835f5c9a";
export const url=new URL("../icons/award_meal-fill.svg?v=a52ec2b3d4bd6db3dc4d31d30d62b34bb3ed0d69d9320bf0aa2a9c065277551c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
