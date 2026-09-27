export const name="lucid_1-ban";
export const id="dl_4f8074b7682b4c2e84c0";
export const url=new URL("../icons/lucid_1-ban.svg?v=af91691aea18d268e9f61c06926019db32111952f72449a08eb31d12a6ae8a86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
