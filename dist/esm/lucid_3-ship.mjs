export const name="lucid_3-ship";
export const id="dl_7fed8ae44a02434aac74";
export const url=new URL("../icons/lucid_3-ship.svg?v=1866878569aa1158b5517953a2e10eba2b4f45086198f054e8aac50a3206383b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
