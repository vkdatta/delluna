export const name="backlight_high_off-fill";
export const id="dl_727933ef474d409088e0";
export const url=new URL("../icons/B/backlight_high_off-fill.svg?v=35e32dafc7a5995463188648352c5418e8ae84f5e3cc923e0378dc84aac85345",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
