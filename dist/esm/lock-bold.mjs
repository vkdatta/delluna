export const name="lock-bold";
export const id="dl_b3f68fffd3314cd09197";
export const url=new URL("../icons/lock-bold.svg?v=1c505a7dcb14be100713c7a757e00ee66a87cb6c616690c4c25023f4d2a16b9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
