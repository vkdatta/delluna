export const name="house_siding-fill";
export const id="dl_103666ab4389f399e2f9";
export const url=new URL("../icons/house_siding-fill.svg?v=4c505c6866181b42c56150f356cc599ba8441e8f73d3ca1cf3867078b8e11d87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
