export const name="replit-logo-light";
export const id="dl_c6ad0fecf5b24a6596ef";
export const url=new URL("../icons/replit-logo-light.svg?v=4d8f3012c1fae8d2645e449fd5f132e4e20ed6108a3b24a4575aa6625d574080",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
