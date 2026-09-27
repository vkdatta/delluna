export const name="angle-duotone";
export const id="dl_d8b243d2b63c4943886e";
export const url=new URL("../icons/angle-duotone.svg?v=8f24d842c02422d88373f35d9455c3158cf0158b5752367315999170b08d7af4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
