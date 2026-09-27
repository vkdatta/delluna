export const name="perm_camera_mic";
export const id="dl_255b76049d244df58bca";
export const url=new URL("../icons/perm_camera_mic.svg?v=4448b9d15497dc20f409bfffb57b1b5b857a3aa04ff86c2ebe209857557a08bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
