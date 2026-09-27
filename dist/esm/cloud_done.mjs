export const name="cloud_done";
export const id="dl_09fac99262137175f466";
export const url=new URL("../icons/cloud_done.svg?v=500fec993d2092379f970f21d59d152944dc05623da72ff78090cbe28a9c4589",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
