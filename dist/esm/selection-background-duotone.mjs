export const name="selection-background-duotone";
export const id="dl_44fb702dedc2dc9fa86a";
export const url=new URL("../icons/selection-background-duotone.svg?v=f591b06db75f115ccb0fa909973d2fdcba95e355a310865c2798fca837274d66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
