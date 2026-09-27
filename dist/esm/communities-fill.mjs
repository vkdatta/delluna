export const name="communities-fill";
export const id="dl_5911942d563858fc9e92";
export const url=new URL("../icons/communities-fill.svg?v=320476826d35ed8c1c97391b04812b81db4ef6d433a6ff121009680d1f82fb44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
