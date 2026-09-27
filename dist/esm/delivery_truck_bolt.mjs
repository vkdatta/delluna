export const name="delivery_truck_bolt";
export const id="dl_9cc145a32fed435c010f";
export const url=new URL("../icons/delivery_truck_bolt.svg?v=b221f142fd995f4b8aae3ebdf9b3a8eada1112b819706a8ecd61833edd998312",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
