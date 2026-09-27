export const name="cloud-x-bold";
export const id="dl_1a985b2886874fcdab9d";
export const url=new URL("../icons/cloud-x-bold.svg?v=79c1104897268a87a6857d7be6095e8ecb3eec00c85c6b096007dccd3af80643",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
