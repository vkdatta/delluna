export const name="folder-light";
export const id="dl_8fec3c7e89a1430ca4cf";
export const url=new URL("../icons/folder-light.svg?v=d616c4b88c133d3569fa40e5488bc2ff17a0c8cc0bfcca61caeba5a5f498efe1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
