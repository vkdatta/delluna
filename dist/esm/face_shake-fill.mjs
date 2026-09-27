export const name="face_shake-fill";
export const id="dl_3df0887c6f86eb6e4b4d";
export const url=new URL("../icons/face_shake-fill.svg?v=dbd46c8dde5efeb5177746cd38dc466319b9a3db2fdb1fc140a7571bbc208c57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
