export const name="image-broken-fill";
export const id="dl_9fb592c1071c4a028f67";
export const url=new URL("../icons/image-broken-fill.svg?v=12ff10fb4b434476e52f60b4b4fb7376ec67f519a9eb2dc2d794e035f58c1d55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
