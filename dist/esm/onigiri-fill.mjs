export const name="onigiri-fill";
export const id="dl_156cd9c5b1f449a98f56";
export const url=new URL("../icons/onigiri-fill.svg?v=cb42af0cc224cf8dc57a2a13d330f942f986cd92e366e513e2631e43dd5a95ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
