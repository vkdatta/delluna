export const name="poker-chip-duotone";
export const id="dl_57c2b17c0b8c4a479845";
export const url=new URL("../icons/poker-chip-duotone.svg?v=0485db1ef884a35ddca3b1ec9c01bcb3fafb1c60dcfe97a91b64b56ca2f5eadf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
