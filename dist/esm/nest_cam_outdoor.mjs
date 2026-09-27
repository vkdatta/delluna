export const name="nest_cam_outdoor";
export const id="dl_4e31f710ac243565db9b";
export const url=new URL("../icons/nest_cam_outdoor.svg?v=57041d7e6f2fbb55f400ef3b046ea48e6c4b142024fdddbe23dcd834a22761e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
