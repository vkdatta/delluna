export const name="battery_profile-fill";
export const id="dl_97c1c5b6d2478876a727";
export const url=new URL("../icons/battery_profile-fill.svg?v=2c6f0423378201dfc39092f9b009a30f450ebe34f33e1ffd2684632c0eabcb4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
