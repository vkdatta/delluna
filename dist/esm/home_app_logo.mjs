export const name="home_app_logo";
export const id="dl_356c4ed840a47771660d";
export const url=new URL("../icons/home_app_logo.svg?v=9f4a8892163b5825d90ce61655247d33a03bb825639c43d121702a72da077716",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
