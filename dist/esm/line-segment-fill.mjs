export const name="line-segment-fill";
export const id="dl_023bfc2c4c2f41e0b7a1";
export const url=new URL("../icons/line-segment-fill.svg?v=92439b4560b5a081ea47ce8a96cef924b25b6bc98c55991e76a5ef2aef1ce9a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
