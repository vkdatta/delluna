export const name="shopping_bag_speed";
export const id="dl_29e3b029945949019c99";
export const url=new URL("../icons/shopping_bag_speed.svg?v=8fa254978b755101a093c1bc594799e6dc9a1686fcc80fec61a57d8608957920",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
