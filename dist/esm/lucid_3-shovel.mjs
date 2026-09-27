export const name="lucid_3-shovel";
export const id="dl_32d08c26fab64389b350";
export const url=new URL("../icons/lucid_3-shovel.svg?v=69bdb8c0f3428c8224069d525cca0f559787d50430b5c92878b4d4b04ebaef0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
