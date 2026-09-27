export const name="battery_profile";
export const id="dl_4042b55e004f331c4440";
export const url=new URL("../icons/battery_profile.svg?v=ec5f33d1f096d7e782001da18c4aced03367bffdf9d9c6d302c3456af6296dbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
