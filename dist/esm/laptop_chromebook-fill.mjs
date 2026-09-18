export const name="laptop_chromebook-fill";
export const id="dl_a9387f37f8364032b49a";
export const url=new URL("../icons/L/laptop_chromebook-fill.svg?v=d67bb980d65193d9c83ccb2aa0a79479212d5623be89f7050b7cb993db216512",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
