export const name="lucid_2-handshake";
export const id="dl_aebb284a616a445ab8cc";
export const url=new URL("../icons/lucid_2-handshake.svg?v=269a77a6bec7b12c0cfac4e99902e817c160ac793aa7613c1015808b692c35fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
