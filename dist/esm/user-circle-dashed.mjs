export const name="user-circle-dashed";
export const id="dl_717f07cf09f801fd2b8b";
export const url=new URL("../icons/user-circle-dashed.svg?v=b9cd126cd5756d660fe3cfe6610dfd08d11c540f95aada4ae63db2ae3259b5a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
