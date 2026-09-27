export const name="shopping_basket";
export const id="dl_1466c35030f5bce752cc";
export const url=new URL("../icons/shopping_basket.svg?v=344f229de7c828a3fbf8855da9fc66a41a5e2e757145aa7b187277513bb561b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
