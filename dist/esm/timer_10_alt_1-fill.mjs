export const name="timer_10_alt_1-fill";
export const id="dl_70dc64026be189c52001";
export const url=new URL("../icons/timer_10_alt_1-fill.svg?v=4cde8910301ee5c80434273455bce2883a03de156b05075ea731e012a6047c52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
