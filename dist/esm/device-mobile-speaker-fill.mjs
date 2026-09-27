export const name="device-mobile-speaker-fill";
export const id="dl_df2a88711a8542c4aebb";
export const url=new URL("../icons/device-mobile-speaker-fill.svg?v=52f7c874ef17a4daa9f9a9920f5f1e795d1f81066f52ecd3d08fd0531572c0ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
