export const name="link-simple-horizontal";
export const id="dl_9bac7ecb6f434db2b90c";
export const url=new URL("../icons/link-simple-horizontal.svg?v=9a72863249106f1f297128d0780abeb7febb9618fdca346837f66b72ca81720c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
