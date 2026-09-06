export const name="cloud-warning-thin";
export const id="dl_ba3394a3a76e42f4af4e";
export const url=new URL("../icons/cloud-warning-thin.svg?v=5fdd94bc1afa5526dc7e7648c3d35c4b09cf14f8861f90ce5b974989ef51ee58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
