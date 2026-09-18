export const name="no_food-fill";
export const id="dl_a77aa783b80145b990c3";
export const url=new URL("../icons/N/no_food-fill.svg?v=58fd55cf99cf290ffd4af2678bb04f951c591b5508f9ce4ba8bf519a126d3aea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
