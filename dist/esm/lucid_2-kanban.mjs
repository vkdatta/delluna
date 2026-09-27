export const name="lucid_2-kanban";
export const id="dl_4ec44e17861f4b5dbf89";
export const url=new URL("../icons/lucid_2-kanban.svg?v=281a377e4ef05f8f852dcc7622764cafb89a27ca8f3d13ab6ac28d08f9d30947",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
