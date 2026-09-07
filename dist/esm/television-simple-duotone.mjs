export const name="television-simple-duotone";
export const id="dl_d49cf116aae64ef7be9a";
export const url=new URL("../icons/T/television-simple-duotone.svg?v=bd902555e30aa6c81bc8e6f550e763ccfe9f2a7136faa653ff06e22dc3877c41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
