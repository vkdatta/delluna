export const name="stop-duotone";
export const id="dl_790b9ced763f485bbd1f";
export const url=new URL("../icons/S/stop-duotone.svg?v=b27b345a9ddd09b09cfad1a3b796b215275e1a906a011f24fa52a319b3a58ef5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
