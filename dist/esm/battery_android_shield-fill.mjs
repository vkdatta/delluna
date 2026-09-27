export const name="battery_android_shield-fill";
export const id="dl_834374d063376c3bae37";
export const url=new URL("../icons/battery_android_shield-fill.svg?v=aa37806403f9fd98ddf68a6de2573cfbc6f0ecbc28f7fb47233c1c95247ec6ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
