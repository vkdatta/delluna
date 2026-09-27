export const name="battery-vertical-high-fill";
export const id="dl_d72f00cd111a44f2a515";
export const url=new URL("../icons/battery-vertical-high-fill.svg?v=354cb84f39544c0791d7cfa06c28c23e2c91bd399c856e6bbfb30c288b599c72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
