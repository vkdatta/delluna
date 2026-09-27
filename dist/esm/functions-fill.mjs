export const name="functions-fill";
export const id="dl_c99a0110f26de63481e8";
export const url=new URL("../icons/functions-fill.svg?v=b1432ccc296034afdabd34e691ef7b32e43e2fd71a8225918a47e0cb2f1785b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
