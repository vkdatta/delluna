export const name="clinical_notes-fill";
export const id="dl_8f788175ce0982656694";
export const url=new URL("../icons/clinical_notes-fill.svg?v=50962205677425e61f807d2262cb9ae443d6b05f2144fd27a186c0e2dd3fa13f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
