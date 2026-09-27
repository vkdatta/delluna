export const name="hand-grabbing-light";
export const id="dl_d84674f16d5d43a0a9f9";
export const url=new URL("../icons/hand-grabbing-light.svg?v=24934725d0b421dc5c31b6392ec6fb0c104ff6c74e396ac1c7a1bc6a91fc6a94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
