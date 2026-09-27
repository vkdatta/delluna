export const name="heartbeat-bold";
export const id="dl_79e04e960a3e4da9b11b";
export const url=new URL("../icons/heartbeat-bold.svg?v=6275a3e41618b6d0f5bcbb3fedea40e4ea3ae3f8dcc179411ca5ad2e982360f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
