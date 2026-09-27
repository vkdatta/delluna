export const name="no_meeting_room-fill";
export const id="dl_3b6cf91cc91f275b7515";
export const url=new URL("../icons/no_meeting_room-fill.svg?v=b91348b70f843157c9ba1b3314fa736397f7d3d3a55346489b4d6fb208cce7c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
