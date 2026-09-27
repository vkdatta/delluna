export const name="lucid_2-hash";
export const id="dl_9a5acb23126d40398fec";
export const url=new URL("../icons/lucid_2-hash.svg?v=b4afba958d62abbceee6cf23d804fdda611831fcfc8345c33092776f0aa51ef5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
