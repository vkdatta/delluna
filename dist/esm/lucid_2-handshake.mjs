export const name="lucid_2-handshake";
export const id="dl_aebb284a616a445ab8cc";
export const url=new URL("../icons/lucid_2-handshake.svg?v=a163dcf8667e27423ebb7f459148b7a5ba16614b38146247d9e004e8695373ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
