export const name="save-fill";
export const id="dl_3212ed9418d2e2feb324";
export const url=new URL("../icons/save-fill.svg?v=0008264ea66f80477a286eecc674b844ee6a3c08ec706277eaf9d8efeeebb5f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
