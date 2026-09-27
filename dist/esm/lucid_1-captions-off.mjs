export const name="lucid_1-captions-off";
export const id="dl_6f361b360a2b4a17bc7b";
export const url=new URL("../icons/lucid_1-captions-off.svg?v=60e0835471a8ffa97dd0c5725dedbb9506b2071114f5f230da8f910e72345a30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
