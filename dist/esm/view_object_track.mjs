export const name="view_object_track";
export const id="dl_e74181607f7c6176fce3";
export const url=new URL("../icons/view_object_track.svg?v=58c4d8ba2d05de2693796a05c5f418f9648c99d2b80cfa5cd394095723f48cac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
