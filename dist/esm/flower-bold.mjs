export const name="flower-bold";
export const id="dl_8456c9e83c934cdd9361";
export const url=new URL("../icons/flower-bold.svg?v=25dbf50514f2d550ccb07e551cf955f3ab64165c6a170ea09c0ab4ac06b2f3db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
