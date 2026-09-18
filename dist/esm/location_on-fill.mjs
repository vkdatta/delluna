export const name="location_on-fill";
export const id="dl_4cb755815fa44294abea";
export const url=new URL("../icons/location_on-fill.svg?v=e021c6d81ee3d30310198b567a6b610e6b82eb1794d83be8bb396b40831b9345",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
