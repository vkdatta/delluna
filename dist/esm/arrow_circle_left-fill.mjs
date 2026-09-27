export const name="arrow_circle_left-fill";
export const id="dl_b0d21389436cf6464751";
export const url=new URL("../icons/arrow_circle_left-fill.svg?v=562e6a04511762cc2446f1a576d39bab936288c30900b12d19f55918e03463e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
