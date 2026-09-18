export const name="redeem-fill";
export const id="dl_2e9849d406b04ffd8ea4";
export const url=new URL("../icons/redeem-fill.svg?v=5a9f384af0cca42ede04589393a5d0feca16a70402ae8b6ce92a2faa2f73d756",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
