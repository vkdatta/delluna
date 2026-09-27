export const name="arming_countdown-fill";
export const id="dl_c58dd56bf3dbca80dcdd";
export const url=new URL("../icons/arming_countdown-fill.svg?v=069bb990330fd4f2213337110e55e9fac035270410ec647ddeb9305af79ea821",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
