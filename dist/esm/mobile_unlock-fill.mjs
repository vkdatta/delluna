export const name="mobile_unlock-fill";
export const id="dl_f29c9b4d0c8ade3dcef4";
export const url=new URL("../icons/mobile_unlock-fill.svg?v=7da586b8d94fcab2bb065fd16b1f3448fc8d1d56b64d65bc5e1589ea1224b224",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
