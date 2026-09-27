export const name="magnifying-glass-plus";
export const id="dl_e9cf2c2b96ef4e81990e";
export const url=new URL("../icons/magnifying-glass-plus.svg?v=680cf247f8d5c071bc6f3ca12697450b305808fff3b15ca77676975cb3de13e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
