export const name="9k_plus";
export const id="dl_ec4d840df515a58bc587";
export const url=new URL("../icons/9k_plus.svg?v=82f44e683aab4f3a7cb34e2ba2b2d38aad799260d9708f213af9424151bc0865",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
