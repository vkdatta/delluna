export const name="cash-register-bold";
export const id="dl_0881d2aec3e749c297c6";
export const url=new URL("../icons/cash-register-bold.svg?v=1fe32cbf826b1a5d536290980bf31095cdf594b250af4b944fedc128370be40c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
