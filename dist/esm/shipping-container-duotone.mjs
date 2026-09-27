export const name="shipping-container-duotone";
export const id="dl_29aaba7122be4f94d0a3";
export const url=new URL("../icons/shipping-container-duotone.svg?v=00ff2d7edc323075231abb3f939f973aa0c315f97d6992c1f94303a5f2b6b3bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
