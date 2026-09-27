export const name="mobile_menu";
export const id="dl_f8438aec86ca367c2d7e";
export const url=new URL("../icons/mobile_menu.svg?v=3f227ee9e40b2ca1a203694fb67d660716929264da49aca2c86baee69910ff0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
