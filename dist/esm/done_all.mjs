export const name="done_all";
export const id="dl_568ee3f5f63328ed2568";
export const url=new URL("../icons/done_all.svg?v=6490638afd158e728c6ef0bb401a538d3ce3c024295dfcce9c3a3f10a188db46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
