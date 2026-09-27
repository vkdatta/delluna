export const name="x-logo-bold";
export const id="dl_3f7cf4797b8e0c66d28a";
export const url=new URL("../icons/x-logo-bold.svg?v=f670e305b60ac162e58b9a7c9fabeae41f3efb47a59af2518a6209256050b775",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
