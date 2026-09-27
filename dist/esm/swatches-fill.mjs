export const name="swatches-fill";
export const id="dl_61d2ed47b72b155f3e91";
export const url=new URL("../icons/swatches-fill.svg?v=1aec8cb1ad4b0308cf9fcfeae3e605f71e9816ebb878859f8e765f425f452664",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
