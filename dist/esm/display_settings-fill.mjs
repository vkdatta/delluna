export const name="display_settings-fill";
export const id="dl_7c2f4d67cbeb5229b2d1";
export const url=new URL("../icons/display_settings-fill.svg?v=ae0ce642c9defdd6ce7794e3beb47aed6188c8b7f5e779dc5289f3b7fecc35d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
