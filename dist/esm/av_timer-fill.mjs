export const name="av_timer-fill";
export const id="dl_44eacd322d0998985b4e";
export const url=new URL("../icons/av_timer-fill.svg?v=f89dd54e7fe646875ff27ed139d0dad912e7085740ff73bd555e26a320f030fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
