export const name="share-fat-light";
export const id="dl_d85e4e976b7b047230b8";
export const url=new URL("../icons/share-fat-light.svg?v=24e03e0bef26444fb0d28e81e18f223a27b0159ed60a3aaba2a4320f31a3f913",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
