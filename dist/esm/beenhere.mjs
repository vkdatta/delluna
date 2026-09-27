export const name="beenhere";
export const id="dl_867a36fab2cbfa241bd2";
export const url=new URL("../icons/beenhere.svg?v=97137d7ec53471e977673efd33efb866ebea821b06aae4440b66783e99a96168",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
