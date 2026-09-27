export const name="diamonds-four-duotone";
export const id="dl_b1536f2632f346cc869a";
export const url=new URL("../icons/diamonds-four-duotone.svg?v=52e8c16998402c3da767414ec5e9cc96ccbaa94d6bd634b1152dd00bff41d004",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
