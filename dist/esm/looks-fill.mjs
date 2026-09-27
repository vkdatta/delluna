export const name="looks-fill";
export const id="dl_b1511093af32a135afd5";
export const url=new URL("../icons/looks-fill.svg?v=e140599393338c80b862efc503bf3025323a78a3e1e562102906f91fb2191b9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
