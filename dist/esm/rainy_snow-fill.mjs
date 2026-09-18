export const name="rainy_snow-fill";
export const id="dl_4692aa2fdae4427ba733";
export const url=new URL("../icons/R/rainy_snow-fill.svg?v=6223401fe4839f7425f9b123cff3aacd22580638b142bf0513d178c6aaee9d18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
