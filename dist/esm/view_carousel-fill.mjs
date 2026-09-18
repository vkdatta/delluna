export const name="view_carousel-fill";
export const id="dl_561e84f070cc470e9206";
export const url=new URL("../icons/view_carousel-fill.svg?v=3a49ed46fad0c78258b646ebcb441fde8dc46455ce9be8af8f8f672c05b7124e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
