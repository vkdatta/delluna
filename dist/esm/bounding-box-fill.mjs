export const name="bounding-box-fill";
export const id="dl_28b87faf186d4812a97b";
export const url=new URL("../icons/bounding-box-fill.svg?v=8512047df405f9d98ac16f03bd316343bc73144fd316bae530f90f0936133e5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
