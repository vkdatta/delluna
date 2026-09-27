export const name="cookie_off";
export const id="dl_4d15154bd649185d1cdf";
export const url=new URL("../icons/cookie_off.svg?v=4f709d82afe8b34a3e679ad2685c437f3856580ec6f02aefc756bf7e77d2d9b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
