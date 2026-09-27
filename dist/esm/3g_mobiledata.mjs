export const name="3g_mobiledata";
export const id="dl_2adfb0b38c91eaf23e2d";
export const url=new URL("../icons/3g_mobiledata.svg?v=5f323f65e44f194c08d452a3d9f8d28fc687acb125ef5b737b0c2f1a15f12c06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
