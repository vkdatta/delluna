export const name="pallet-fill";
export const id="dl_10f49561014a19f13963";
export const url=new URL("../icons/pallet-fill.svg?v=1bb0fdfe21ef0c153b5a7ddf6bff36ab85e4c659f3bdb2bb3f60dd6ad38428c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
