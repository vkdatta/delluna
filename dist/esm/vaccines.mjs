export const name="vaccines";
export const id="dl_c87d23223fd06b167189";
export const url=new URL("../icons/vaccines.svg?v=b0464da44acdb84b3ddd19c9f13257e8b6ade9e56531064cb318d0de579bf849",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
