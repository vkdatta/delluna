export const name="image-broken-light";
export const id="dl_7dab69d6c25e4b25b1f7";
export const url=new URL("../icons/image-broken-light.svg?v=c759592e1a2abfce503b62e658411888ae3929e95437a37cb86e18b9437abcd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
