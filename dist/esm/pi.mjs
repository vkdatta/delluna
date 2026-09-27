export const name="pi";
export const id="dl_a1104b5f8f7d4ed096c8";
export const url=new URL("../icons/pi.svg?v=78d1781f7f87c21dde2b954283f6b3beba95a7e1272775d7f6a8a61684310b68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
