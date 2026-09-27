export const name="battery_profile";
export const id="dl_2a0007681b03094a761d";
export const url=new URL("../icons/battery_profile.svg?v=5e426ca68ece9618305290067b48877ae4ebcfc2a22ac0f9aae080e6513d4c15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
