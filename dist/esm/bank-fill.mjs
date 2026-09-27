export const name="bank-fill";
export const id="dl_405aad449f50486f8a02";
export const url=new URL("../icons/bank-fill.svg?v=eb6e205f6b82567e4132e4da43a0efcd16761551fdc5ebef6e0ccfb68d23323d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
