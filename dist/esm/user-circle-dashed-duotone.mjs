export const name="user-circle-dashed-duotone";
export const id="dl_e80e9ebbb578406d8e8e";
export const url=new URL("../icons/U/user-circle-dashed-duotone.svg?v=ec5e2057aac6f212fed38309e7a6d4b9a6fdc6b4d7635991936ae232ed485da5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
