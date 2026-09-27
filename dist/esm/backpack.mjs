export const name="backpack";
export const id="dl_3e91226480f84b99994e";
export const url=new URL("../icons/backpack.svg?v=6bb85954f4f393146c93341551d89b0589a1ac2f605bbf890285df55528564cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
