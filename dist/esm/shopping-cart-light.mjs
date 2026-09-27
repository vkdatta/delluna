export const name="shopping-cart-light";
export const id="dl_4e0554c601ddffb38892";
export const url=new URL("../icons/shopping-cart-light.svg?v=901a620fb6dee2267a9ad69385d07ee4b52ce8c22ad5c54af2b0195796b0fcc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
