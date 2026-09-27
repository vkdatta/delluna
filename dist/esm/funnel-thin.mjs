export const name="funnel-thin";
export const id="dl_75b9f6dc658f42d68dcd";
export const url=new URL("../icons/funnel-thin.svg?v=4ad0a0006a5c4c7281aa52db5e51b2341b8418a21dc477854220012180e13e4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
