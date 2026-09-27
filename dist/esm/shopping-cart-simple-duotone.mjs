export const name="shopping-cart-simple-duotone";
export const id="dl_089dd5564787b5c30228";
export const url=new URL("../icons/shopping-cart-simple-duotone.svg?v=e983187ff5bd5ff57556f4a1df1c367e3d5d86ac246ed228ad3e0290101a2229",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
