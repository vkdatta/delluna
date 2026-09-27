export const name="nest_cam_stand-fill";
export const id="dl_5315da0aa36fbbb6c122";
export const url=new URL("../icons/nest_cam_stand-fill.svg?v=e1c2d7489030dcfb0591ed9d467a2ba355da6d27fbbb181bfa2d0eccd9a94b80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
