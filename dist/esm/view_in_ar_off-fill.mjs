export const name="view_in_ar_off-fill";
export const id="dl_cb1ff83cf453426106f3";
export const url=new URL("../icons/view_in_ar_off-fill.svg?v=8429812a120349deacae36089dc75e825cd339ffe33b22a9d3a171c1ec447476",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
