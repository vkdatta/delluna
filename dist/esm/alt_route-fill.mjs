export const name="alt_route-fill";
export const id="dl_48fab823123ea6fee3ae";
export const url=new URL("../icons/alt_route-fill.svg?v=b448f5f7cd0e8f1d46e09639f06aab76fb68e0900d786da3d42d46705802984d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
