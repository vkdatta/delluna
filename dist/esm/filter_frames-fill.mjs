export const name="filter_frames-fill";
export const id="dl_3b3a3d52b494ba8b346b";
export const url=new URL("../icons/filter_frames-fill.svg?v=d61826f9157310e483fac23426944df130adfe1b3594a098007bf7694c113e21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
