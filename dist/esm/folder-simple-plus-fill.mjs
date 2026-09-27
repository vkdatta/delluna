export const name="folder-simple-plus-fill";
export const id="dl_10f7faceafc44db28999";
export const url=new URL("../icons/folder-simple-plus-fill.svg?v=16acd9877620573835f302c695c6b41ac99fd864f7873782fbc32f424f739005",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
