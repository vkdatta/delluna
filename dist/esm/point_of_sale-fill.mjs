export const name="point_of_sale-fill";
export const id="dl_01db261c82d5ec0db70e";
export const url=new URL("../icons/point_of_sale-fill.svg?v=0dcc240c54fb509591316bcb9bfdb96b519625c8313770413bbd4b9727cbc8b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
