export const name="view_object_track-fill";
export const id="dl_14ac7c4b3c85895e316d";
export const url=new URL("../icons/view_object_track-fill.svg?v=320cbfbe2a3305a2aae54c1622200efb9773065ca2a1c09c63f1723562783577",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
