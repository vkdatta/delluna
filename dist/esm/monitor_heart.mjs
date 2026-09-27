export const name="monitor_heart";
export const id="dl_4fb6516d0438933de912";
export const url=new URL("../icons/monitor_heart.svg?v=c747bd049b2105b191d26bda02aa6bfe297f3551b02947fef156da8f7a9660a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
