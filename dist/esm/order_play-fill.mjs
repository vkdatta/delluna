export const name="order_play-fill";
export const id="dl_3d440b0e67b77c094cda";
export const url=new URL("../icons/order_play-fill.svg?v=b0b287adfc5362b343f85fbdaabbf80792c4dd2bb4fc7014797c592b9ed91862",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
