export const name="heart-straight-fill";
export const id="dl_5edd1edb94ae489893a3";
export const url=new URL("../icons/heart-straight-fill.svg?v=f7ed62835970e6dc8841c306a5faf401993cc2dc2dcd871a4d739fe5e4e23c43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
