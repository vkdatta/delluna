export const name="lucid_1-coins";
export const id="dl_f4e0a4768a1642a2a92e";
export const url=new URL("../icons/lucid_1-coins.svg?v=9a921b6c188b8a80548a7fb0f5b2c4f4113c416994201f80ef71e2b8d7d1d76a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
