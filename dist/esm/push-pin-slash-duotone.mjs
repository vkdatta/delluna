export const name="push-pin-slash-duotone";
export const id="dl_2da468ace68d4f1f92d4";
export const url=new URL("../icons/push-pin-slash-duotone.svg?v=49d754fea720fbb33dd057d3f1235093f0749ea9ca9cc11bebfc4e6a1bb14b71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
