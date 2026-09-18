export const name="file_copy-fill";
export const id="dl_ff43b8f451474b84b91f";
export const url=new URL("../icons/file_copy-fill.svg?v=0d33e112892c0fa2f6def1bf7787964a4abbabe9dfe7cef195d8f0286424e527",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
