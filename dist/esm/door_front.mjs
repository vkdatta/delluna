export const name="door_front";
export const id="dl_507c9a13f2294b54a1ed";
export const url=new URL("../icons/door_front.svg?v=4ddf8fae259f8b04a1f7c6a73f3ddfcb379686d0a4ac7c70fd7297f023c19447",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
