export const name="wave-sine-fill";
export const id="dl_d2d2b25571c3468caa5c";
export const url=new URL("../icons/W/wave-sine-fill.svg?v=19e4c0fc65a5e4a718b59142cd84dac992df6b2feedb4ca1fb481e200c045723",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
