export const name="square-stop";
export const id="dl_492f6cdda30d475aa15a";
export const url=new URL("../icons/square-stop.svg?v=1f1e5893b3cfe9497d05e6016441524abaabf6fc560423880beb3d90421cbd7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
