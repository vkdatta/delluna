export const name="synagogue-fill";
export const id="dl_99b4b562b35442c297f6";
export const url=new URL("../icons/S/synagogue-fill.svg?v=4921ea82c4a18bf1882475c746c03b83c7b85c4be211cd05a4b9b14db34d3fe0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
