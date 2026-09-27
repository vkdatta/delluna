export const name="shopping_bag_speed";
export const id="dl_dce0734bf5ff015d5983";
export const url=new URL("../icons/shopping_bag_speed.svg?v=963a8e30a9c91bf2f444cbdf6d80c0768524e3f1318d6978b4fcc1dd33c90666",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
