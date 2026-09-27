export const name="local_see-fill";
export const id="dl_b54989abe535579cc9ff";
export const url=new URL("../icons/local_see-fill.svg?v=5c047682cf1fee097b7e96e398b258db2b37d45c3d4e3bbbec861b9d49741339",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
