export const name="shield-checkered-light";
export const id="dl_ebe2a93d1c27be737094";
export const url=new URL("../icons/shield-checkered-light.svg?v=5becef2d88362cced0cee42dfdbe56a6651d7674811770868df6ebc29d032ce3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
