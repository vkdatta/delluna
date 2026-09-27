export const name="no_meeting_room";
export const id="dl_fc7e1e166bd9396a9482";
export const url=new URL("../icons/no_meeting_room.svg?v=bd1c355483573df42321d0326d9087c314a3c08cafb03603504e59345e62afcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
