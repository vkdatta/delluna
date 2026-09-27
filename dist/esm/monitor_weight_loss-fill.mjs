export const name="monitor_weight_loss-fill";
export const id="dl_ef129f3daae89e94b399";
export const url=new URL("../icons/monitor_weight_loss-fill.svg?v=14dc55db8709ffcc658eff9dccc4c6cfce8f88b3a6b482d0a72b5ccd59a4bfc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
