export const name="ink_pen-fill";
export const id="dl_86b9a97211b059f063e2";
export const url=new URL("../icons/ink_pen-fill.svg?v=e2b0d5b60d85f7de1d86a7d4a1c5db5e3ca6d264d8d712bc36b7859bcc5433c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
