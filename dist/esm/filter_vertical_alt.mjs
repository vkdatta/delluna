export const name="filter_vertical_alt";
export const id="dl_6e1282bb1b924ecc887b";
export const url=new URL("../icons/all_60_named_svgs/filter_vertical_alt.svg?v=643e74b9c4fc728c3f2e6c15d39a118372a4c97e4f7261b081b2870ba021d154",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
