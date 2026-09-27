export const name="fiber_manual_record-fill";
export const id="dl_2189171ccb11ba8c4231";
export const url=new URL("../icons/fiber_manual_record-fill.svg?v=2cfd331150f28f8929dc716eec03adca2a824d3648f6e8c9b2de58250c565287",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
