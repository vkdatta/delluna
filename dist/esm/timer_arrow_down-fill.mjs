export const name="timer_arrow_down-fill";
export const id="dl_8b8c58b9ccb175972eff";
export const url=new URL("../icons/timer_arrow_down-fill.svg?v=3936d68712f43fd2137171dd7b0b71140431012677a3d6d8cc2962ae10dca40d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
