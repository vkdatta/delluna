export const name="mobile_theft-fill";
export const id="dl_cf8b2165017a002bf82d";
export const url=new URL("../icons/mobile_theft-fill.svg?v=1853bb31b7c92c3f1ea4615a8fe422b67f220fac55ed282cce512be3549fc4b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
