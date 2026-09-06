export const name="image-broken-fill";
export const id="dl_9fb592c1071c4a028f67";
export const url=new URL("../icons/image-broken-fill.svg?v=38d3ea6701db2cf2cb4bb11220b6b858564ede06acd6c4da7432724ae30dbc99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
