export const name="phone-pause-duotone";
export const id="dl_f5dd2ddd61fb40839809";
export const url=new URL("../icons/phone-pause-duotone.svg?v=73f1e4d2330c1e1582dda4f54601724cf3fe15cb8296d68bea5ee4001fe7a5a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
