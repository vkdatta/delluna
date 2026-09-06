export const name="dice-four-duotone";
export const id="dl_332d53a0a4274f398ae7";
export const url=new URL("../icons/dice-four-duotone.svg?v=15844d85f40fa2f8a36103f2a8bb1e09853d02e9d80e7ef767a3580556ad005e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
