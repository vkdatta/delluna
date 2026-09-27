export const name="flip-horizontal-fill";
export const id="dl_8079800abe014e3885c8";
export const url=new URL("../icons/flip-horizontal-fill.svg?v=185876bf5bd37a50d80381e0bc8e885f638c1535ff1521017a44a7f259dc77b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
