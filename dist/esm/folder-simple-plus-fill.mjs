export const name="folder-simple-plus-fill";
export const id="dl_10f7faceafc44db28999";
export const url=new URL("../icons/folder-simple-plus-fill.svg?v=92ce26de3188a600a0dc8e8468be1d7202c01ff32fcd6c968644172a787ab01a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
