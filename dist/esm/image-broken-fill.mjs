export const name="image-broken-fill";
export const id="dl_9fb592c1071c4a028f67";
export const url=new URL("../icons/image-broken-fill.svg?v=35ecefc6906d7c45c2ad89ef77dfe4dd45cc2c6a0dc9527e6edd50cc7687b1a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
