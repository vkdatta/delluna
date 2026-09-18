export const name="dock_to_right-fill";
export const id="dl_f8dcfc6c29104b4496a3";
export const url=new URL("../icons/dock_to_right-fill.svg?v=23f1171160e4e6df1fc689925909688708fada75db5c4f8521f72770004a2a40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
