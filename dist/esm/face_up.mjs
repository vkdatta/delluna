export const name="face_up";
export const id="dl_aa2163e643e74f44d136";
export const url=new URL("../icons/face_up.svg?v=9028cebfe327640a1b580068a703580f327317f1a043d2f3da0f1c8b40d696c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
