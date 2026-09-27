export const name="timer_1-fill";
export const id="dl_02d5ff7fbd0a6d5e13c3";
export const url=new URL("../icons/timer_1-fill.svg?v=811d4dcc14b722485b40a4aeb29d4f8a04652f40e97c0760c4ff3515503ae18c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
