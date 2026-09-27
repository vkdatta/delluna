export const name="web_asset_off-fill";
export const id="dl_51d3f743f613ceae31f2";
export const url=new URL("../icons/web_asset_off-fill.svg?v=637602c45a9d0e00a6ee72ded5d4924ec279c621617b1a6031e784a6362f4762",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
