export const name="text-search";
export const id="dl_cee180a80e3b40b693b4";
export const url=new URL("../icons/text-search.svg?v=2ea8755ecc3cf2272c1da02e9a096a937364a42ae4adb048bca6f9a5d6205f6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
