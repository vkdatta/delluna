export const name="redo-fill";
export const id="dl_c869a7869cd44b8ef26c";
export const url=new URL("../icons/redo-fill.svg?v=902cc40f882fb1a157b5098693eb26aeef3150a47950a64ed7f83a2177b7af8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
