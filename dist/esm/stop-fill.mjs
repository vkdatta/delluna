export const name="stop-fill";
export const id="dl_8859804d13c927461969";
export const url=new URL("../icons/stop-fill.svg?v=578c1e69fdf52f24e3f97e1dcb9b11de034b9c05c6c3b9a789eccc75073522e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
