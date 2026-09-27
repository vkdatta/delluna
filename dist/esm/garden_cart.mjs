export const name="garden_cart";
export const id="dl_07c01944f3af445b568e";
export const url=new URL("../icons/garden_cart.svg?v=b654bbc5c27e8cb987c0875621d97cae0ca1b98b740756449acfd63a4aaba204",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
