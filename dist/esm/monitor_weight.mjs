export const name="monitor_weight";
export const id="dl_88d94fa571bb16296d23";
export const url=new URL("../icons/monitor_weight.svg?v=8e1db95c9c3e93166b52b10f40516e477c52bea2fc9e2ecad5613ab5cd756e2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
