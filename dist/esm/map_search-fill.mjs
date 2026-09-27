export const name="map_search-fill";
export const id="dl_c5b011c94a61ea879ccc";
export const url=new URL("../icons/map_search-fill.svg?v=d8d4a92067545ba6a515428657a0113f50e52bd627d2524acb5313f05883edde",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
