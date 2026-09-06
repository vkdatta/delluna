export const name="arrows-in-line-horizontal-duotone";
export const id="dl_cd0137d943744233be8e";
export const url=new URL("../icons/arrows-in-line-horizontal-duotone.svg?v=97aebc17725d4faf48cd18f04d68e7e5f198ac2253759e004678c1bd29a8c18b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
