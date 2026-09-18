export const name="mobile_gear";
export const id="dl_2c7adbf0823b441fae87";
export const url=new URL("../icons/mobile_gear.svg?v=60026eed9b8744250c251a3518bafa66bc2ef56bc7dd607b1d4f771d7a644716",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
