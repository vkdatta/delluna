export const name="cookie_off";
export const id="dl_06a3e2545b2bb2d79a25";
export const url=new URL("../icons/cookie_off.svg?v=08053d180ce8650e2b3ccf7bde2092567413d334bf7dea59e5f50394b8484718",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
