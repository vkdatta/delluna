export const name="segment-fill";
export const id="dl_b74e7b0beef9d02cf964";
export const url=new URL("../icons/segment-fill.svg?v=2544fbaa7fd85f3f01db7dc39e74bb76f94739cff21a48d38987216e56f8769f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
