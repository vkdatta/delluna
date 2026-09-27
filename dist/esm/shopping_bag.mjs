export const name="shopping_bag";
export const id="dl_9738bc69f87589ead3c1";
export const url=new URL("../icons/shopping_bag.svg?v=2048653082bc984379a20cd34c7f58622cc58184bcb16e8dc0db46fbcf38c53c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
