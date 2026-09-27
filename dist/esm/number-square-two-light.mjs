export const name="number-square-two-light";
export const id="dl_42ddc757689d478ba190";
export const url=new URL("../icons/number-square-two-light.svg?v=ac47729c99fd404f212463ab7af6ff03bb8b1aae06156d0060fc374b6525292a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
