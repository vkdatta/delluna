export const name="slideshow-light";
export const id="dl_fab4eaafb70179bbe1d0";
export const url=new URL("../icons/slideshow-light.svg?v=f841e8b4a133dca8c43ff997603f621abe0350e07defde763715696b8029814f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
