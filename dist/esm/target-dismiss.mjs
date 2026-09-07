export const name="target-dismiss";
export const id="dl_5cde47292647466eb3b2";
export const url=new URL("../icons/close/target-dismiss.svg?v=4bcf49aa0379a1107ff7bb304669c6ed223b3155648e544567cc54f5688576ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
