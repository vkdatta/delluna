export const name="lucid_3-pencil-ruler";
export const id="dl_82611782319b4b059fe3";
export const url=new URL("../icons/lucid_3-pencil-ruler.svg?v=5145b005067e6669a34331df5731be9d443116a09df126d125f82724f7245559",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
