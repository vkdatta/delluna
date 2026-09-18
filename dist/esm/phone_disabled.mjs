export const name="phone_disabled";
export const id="dl_5a13393476554242b26a";
export const url=new URL("../icons/phone_disabled.svg?v=9eb281b0cc703b2c33e2f8cbf0b1408cc2277e3b288fc1b7a6f43e8b71f49141",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
