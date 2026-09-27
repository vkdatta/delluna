export const name="recycle-duotone";
export const id="dl_a45729d268b94a14a7ac";
export const url=new URL("../icons/recycle-duotone.svg?v=f92170ef97d5116cffce55985a6f43ad29fc54f4e85a6fa878002e139988b917",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
