export const name="check-fat-fill";
export const id="dl_681192422b224cd3be66";
export const url=new URL("../icons/check-fat-fill.svg?v=3ffa1f1d3a870e5484558693a25a3bfbff046f30f9eb513482c581f773e31323",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
