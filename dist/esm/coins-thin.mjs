export const name="coins-thin";
export const id="dl_80f4b774d88845baad76";
export const url=new URL("../icons/coins-thin.svg?v=787addb6f8272d8d1dc486e41cf99f751ea0cd68b0d675562a0a474807c95035",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
