export const name="align_horizontal_left";
export const id="dl_49d48a1ed0f4f5b1e837";
export const url=new URL("../icons/align_horizontal_left.svg?v=3d18984a3b0379215cd5e60fed0ebfab9fa88f5c7f4d7a63429f24afe54a8794",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
