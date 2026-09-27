export const name="mobile_camera_front-fill";
export const id="dl_959a4cdf40357e8dabea";
export const url=new URL("../icons/mobile_camera_front-fill.svg?v=326f8f261189b6f3d05a3b3709644b04dc56d500d8654a5ec865dc861186e33b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
