export const name="order_play";
export const id="dl_cb63e23a0a13b3602047";
export const url=new URL("../icons/order_play.svg?v=df198a5cb375b0fdb73ed4a03cf99da72673fa3d1c3efc6b7a63031418bca866",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
