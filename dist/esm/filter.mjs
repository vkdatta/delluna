export const name="filter";
export const id="dl_020e6ce61d4647b68a8e";
export const url=new URL("../icons/all_60_named_svgs/filter.svg?v=010169c9df08b01520d2113a26ed5e553f4f8776de7ca4cb9d8a194e708d26c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
