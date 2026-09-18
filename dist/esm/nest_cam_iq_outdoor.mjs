export const name="nest_cam_iq_outdoor";
export const id="dl_88764015174c4e129b6b";
export const url=new URL("../icons/N/nest_cam_iq_outdoor.svg?v=3fd20c983d0c1492e9d4f920f5f253d3e66e1ed842714d5d8bf3f30d8e5b59db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
