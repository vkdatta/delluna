export const name="sensor_window-fill";
export const id="dl_c9aa30ace1774ccfbe74";
export const url=new URL("../icons/S/sensor_window-fill.svg?v=5fe0c1808f6dccb958d88558b739c14eaa3b1bd9db952c30788a96e98206f815",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
