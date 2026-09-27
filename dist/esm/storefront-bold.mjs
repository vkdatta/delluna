export const name="storefront-bold";
export const id="dl_92676aa2628166a1b094";
export const url=new URL("../icons/storefront-bold.svg?v=f5e202991f923a43bf701237f6fef70c986a645bc4aa065e179948b3ea409163",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
