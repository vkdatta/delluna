export const name="motion_mode-fill";
export const id="dl_4028e31567d43f8d464d";
export const url=new URL("../icons/motion_mode-fill.svg?v=43fa619fe49bd64f911712a6f279c1a1f8e2b240f5a2eca420979fb5a641a4f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
