export const name="open_in_browser-fill";
export const id="dl_bd6e558f3db316d07bda";
export const url=new URL("../icons/open_in_browser-fill.svg?v=a6217e465cf2178b39377f43f6c2d6d432e2d2045a55407f89f094e329140d00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
