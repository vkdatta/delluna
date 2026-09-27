export const name="swap_horizontal_circle";
export const id="dl_030bf3f272da9d8892c8";
export const url=new URL("../icons/swap_horizontal_circle.svg?v=b81b07dd75cd831b10ee68e2d9ca0cdc90288cf5eb7dd929c2e57c2e537ce71f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
