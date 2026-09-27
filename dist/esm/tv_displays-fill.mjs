export const name="tv_displays-fill";
export const id="dl_b761fba794bc6f3ebdc2";
export const url=new URL("../icons/tv_displays-fill.svg?v=19e20f4c88dd4ebc39ff60945c0776aa4dd2d0a5c712f97ddbc56b98a34afa76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
