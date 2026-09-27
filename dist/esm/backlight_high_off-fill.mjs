export const name="backlight_high_off-fill";
export const id="dl_63fd02c5a43e037d6002";
export const url=new URL("../icons/backlight_high_off-fill.svg?v=f560ad500f3e42e35e415fe5d25a1c977823d3dfcd90321d37be11703895d413",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
