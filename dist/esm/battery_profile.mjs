export const name="battery_profile";
export const id="dl_c3f3996e246d41f69ce9";
export const url=new URL("../icons/battery_profile.svg?v=3bd1251f265b6e0ed2f0ca41347988ad60b261c1e6bd7a07858cf9f33df10b94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
