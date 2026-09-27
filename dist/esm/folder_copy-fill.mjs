export const name="folder_copy-fill";
export const id="dl_b4ab779531c9ba0e066d";
export const url=new URL("../icons/folder_copy-fill.svg?v=73b69d8799873efaf826aaa936318e245e7c3263701c26797ce9ca7083b18f9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
