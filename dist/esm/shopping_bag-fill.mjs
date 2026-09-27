export const name="shopping_bag-fill";
export const id="dl_3479d14be556c28ef948";
export const url=new URL("../icons/shopping_bag-fill.svg?v=4f755d289b8cbc2a8a21579d8444b82c1c9e64e3b763bd353ed185c4aa8f4bb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
