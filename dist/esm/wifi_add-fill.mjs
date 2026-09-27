export const name="wifi_add-fill";
export const id="dl_ea2d6a31a382f20f4eeb";
export const url=new URL("../icons/wifi_add-fill.svg?v=9f335e60a134f079a4482c24de922b7c0d611ea07b574aa8b41210a79b04086b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
