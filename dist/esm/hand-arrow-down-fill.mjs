export const name="hand-arrow-down-fill";
export const id="dl_652fe90f134b4e81827a";
export const url=new URL("../icons/hand-arrow-down-fill.svg?v=ad25bb2caf04661febb438876565f024527edaf5606e858432d5c8ad2cf1fc9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
