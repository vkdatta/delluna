export const name="heart_smile-fill";
export const id="dl_9364ef083cef4c108e7a";
export const url=new URL("../icons/heart_smile-fill.svg?v=d41c7d8e70975c71f3797e2a9f2991042afddb62424ec311721dd3aa77025b1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
