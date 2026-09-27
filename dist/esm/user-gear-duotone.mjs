export const name="user-gear-duotone";
export const id="dl_6e516a91c9d8f96be9f3";
export const url=new URL("../icons/user-gear-duotone.svg?v=69d6f5937cc60b4b939956cfb49a936fc61bd295f9af5f072e9ee532f2e9ab9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
