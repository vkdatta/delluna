export const name="cancel-fill";
export const id="dl_624a1be163d5c17f9772";
export const url=new URL("../icons/cancel-fill.svg?v=a896647f56c673cce3542dbfb4231c8c4b11ed03e2bb7c76b0f8e7e467f0ee10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
