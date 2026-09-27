export const name="lucid_2-lighthouse";
export const id="dl_272d129408174198a85a";
export const url=new URL("../icons/lucid_2-lighthouse.svg?v=e81f78265caf68919867b92fe851a28a6308f112ab2ef52136869e47eebf0177",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
