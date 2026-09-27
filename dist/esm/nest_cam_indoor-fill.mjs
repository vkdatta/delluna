export const name="nest_cam_indoor-fill";
export const id="dl_8216f71ae9266ed80b00";
export const url=new URL("../icons/nest_cam_indoor-fill.svg?v=5a8e070870f33c4e470f83fb7c830369fe164f5a42ebc481e7c82f82f27e4890",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
