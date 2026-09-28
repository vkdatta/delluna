export const name="backlight_high_off-fill";
export const id="dl_5d24ad8adfc4cfd17380";
export const url=new URL("../icons/backlight_high_off-fill.svg?v=35e32dafc7a5995463188648352c5418e8ae84f5e3cc923e0378dc84aac85345",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
