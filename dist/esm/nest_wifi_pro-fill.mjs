export const name="nest_wifi_pro-fill";
export const id="dl_4af63069e4fff7beba93";
export const url=new URL("../icons/nest_wifi_pro-fill.svg?v=2b79b9f3916831bebc22331d9df881144b06e4da63b201744c9802df5af7965c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
