export const name="select_window_off-fill";
export const id="dl_93aeac839b7ca94bf28d";
export const url=new URL("../icons/select_window_off-fill.svg?v=c53f1be33c138dbf2410a8cc52f5f12b623275dbafabebf5d93e3dbf99fb7777",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
