export const name="volunteer_activism";
export const id="dl_3522c313b9d6fe6aca33";
export const url=new URL("../icons/volunteer_activism.svg?v=ed57b296d5e48602b2430e347e4f5c8d7912de3d8c95e0599e140c09e3cd9192",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
