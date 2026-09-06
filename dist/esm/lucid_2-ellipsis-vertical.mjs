export const name="lucid_2-ellipsis-vertical";
export const id="dl_9b96c2d1fa304bd48a05";
export const url=new URL("../icons/lucid_2-ellipsis-vertical.svg?v=1e4fc8f19cb3b089738e4345bd2fba70847ee3265e2ad010b1455444f83a75ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
