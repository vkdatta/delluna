export const name="add-fill";
export const id="dl_895eb1b673ee3321ba27";
export const url=new URL("../icons/add-fill.svg?v=93f9d2cee006ac9ad0492e0df1cbae7afc86f06ab8cba128e1093e5fac89b533",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
