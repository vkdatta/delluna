export const name="nest_cam_wired_stand-fill";
export const id="dl_c1520392be07784059d8";
export const url=new URL("../icons/nest_cam_wired_stand-fill.svg?v=e04c1e7ea4bdee849592967326dad0f8772a899d296bd74b00cc896f166e5791",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
