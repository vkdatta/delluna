export const name="lucid_3-nfc";
export const id="dl_5178c849b83044f18069";
export const url=new URL("../icons/lucid_3-nfc.svg?v=ff88ae793d3ebffb519e7b91ae584fe6d3b769eeb2e5fd4dc5ffc34956b6b81a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
