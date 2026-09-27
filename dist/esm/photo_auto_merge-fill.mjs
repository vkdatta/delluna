export const name="photo_auto_merge-fill";
export const id="dl_3bfec23bd71b6cf1c8e9";
export const url=new URL("../icons/photo_auto_merge-fill.svg?v=9fa5e77dc6117938cce84d588183c83c49746b762f2ae36db97a86db7e8f8c95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
