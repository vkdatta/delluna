export const name="placeholder";
export const id="dl_5f2ce84ad16e419da8ea";
export const url=new URL("../icons/placeholder.svg?v=a370544d69c546a0fa40ea4fa6994faec9555633696f6aca95fb02ef73bba744",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
