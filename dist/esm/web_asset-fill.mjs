export const name="web_asset-fill";
export const id="dl_958dbdfaaf0a43f90fce";
export const url=new URL("../icons/web_asset-fill.svg?v=f7e9c60855b929d1c54e2400b1a80f8b622725586fa7e38ff3939b8ea12eaa05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
