export const name="timer_pause";
export const id="dl_b1340c7a5338fa0bf4b4";
export const url=new URL("../icons/timer_pause.svg?v=969833a77b000d190feb7731467ff872b1bf9287bbf0dc98ae71e3a32bb1507f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
