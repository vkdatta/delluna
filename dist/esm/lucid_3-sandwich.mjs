export const name="lucid_3-sandwich";
export const id="dl_be6a06c6657143648358";
export const url=new URL("../icons/lucid_3-sandwich.svg?v=6b80025f31d7672fa1f10d9c65842f5e4b7635eafa78fc00b39917de1bece27f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
