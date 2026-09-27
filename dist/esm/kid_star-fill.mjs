export const name="kid_star-fill";
export const id="dl_469925c016a49cfd1a96";
export const url=new URL("../icons/kid_star-fill.svg?v=335fb03bf042dacfa7b8e004da2785cce7817bde70beede93094565228bf3180",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
