export const name="face_nod-fill";
export const id="dl_03231e1f2013d112fb4f";
export const url=new URL("../icons/face_nod-fill.svg?v=84452d32a89acfc6d21dd946350fbc8654df887bd2747126a77fe0a04ad75fe5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
