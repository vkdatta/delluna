export const name="timer_10_alt_1";
export const id="dl_5317070d6e77e50a526c";
export const url=new URL("../icons/timer_10_alt_1.svg?v=484359a54bf83d968edfe3caaf3b85b5dfb417058365c367f1409de96f61fed8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
