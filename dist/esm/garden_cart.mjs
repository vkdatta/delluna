export const name="garden_cart";
export const id="dl_048d868e42fe4379bdbc";
export const url=new URL("../icons/G/garden_cart.svg?v=fc268e4a6ff406aefe3dee6cbd8e4a7518b6de5dd1d49918a051ef90d1d2d0b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
