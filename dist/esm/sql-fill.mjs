export const name="sql-fill";
export const id="dl_de7d2b114464e24ab8fd";
export const url=new URL("../icons/sql-fill.svg?v=b0f4aaee74a673412d9acc334bef0931c1a86dc5c04833ce907d9714293c9d16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
