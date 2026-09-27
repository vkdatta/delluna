export const name="history_toggle_off-fill";
export const id="dl_dd2c9430f8d2c032224d";
export const url=new URL("../icons/history_toggle_off-fill.svg?v=657281477c1637e952d96e97b85c813e2fb1f24dd9daaed12357b77a502e437f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
