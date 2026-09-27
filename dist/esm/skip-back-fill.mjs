export const name="skip-back-fill";
export const id="dl_3549caae24ad72ee3192";
export const url=new URL("../icons/skip-back-fill.svg?v=e16efb758007181836ade67634817dfd80718c17d3663110c0973d5bce9f9e8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
