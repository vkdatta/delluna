export const name="backup-fill";
export const id="dl_0954c03091112b29a1be";
export const url=new URL("../icons/backup-fill.svg?v=4cca191ba290fcf9fbfde71cff5c74fec62b48f87d5e579f9d5085db27e1a267",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
