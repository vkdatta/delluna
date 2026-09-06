export const name="lucid_2-fish-off";
export const id="dl_cffa62915b7541d59dcd";
export const url=new URL("../icons/lucid_2-fish-off.svg?v=d1f45d93137a832c48f6e51803d6039493346b150ed8b69d6a85976f833543e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
