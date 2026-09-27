export const name="battery_profile";
export const id="dl_fd306f6bae0a429402a9";
export const url=new URL("../icons/battery_profile.svg?v=b4c0038e668dbb14b3c1f1f4059b3772d2d359199127e276a45d6661a0a765d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
