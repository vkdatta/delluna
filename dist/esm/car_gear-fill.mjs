export const name="car_gear-fill";
export const id="dl_2abdd9e319313d1166af";
export const url=new URL("../icons/car_gear-fill.svg?v=8d3e6f8c2b9cbdcd5c4c6d51e26221825b4ffa3f89ea3b6f664a35815f21b019",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
