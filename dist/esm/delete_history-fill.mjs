export const name="delete_history-fill";
export const id="dl_2b09e63364b57c74d4af";
export const url=new URL("../icons/delete_history-fill.svg?v=f31ac57eeec40dafa20381a5c971a0d6df61be9399a24e03182d3c6ff238ed78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
