export const name="shop_two";
export const id="dl_05825313570fc4b41c2d";
export const url=new URL("../icons/shop_two.svg?v=de66a1b221ff01fdebf64b0ad218492d438c4c9cdebd8e052eb4a1a03d02ec81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
