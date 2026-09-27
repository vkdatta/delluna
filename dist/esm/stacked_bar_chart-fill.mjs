export const name="stacked_bar_chart-fill";
export const id="dl_12d2f001509c87b46dc7";
export const url=new URL("../icons/stacked_bar_chart-fill.svg?v=64f5ee355bb0b21f782348824c7331a5f49cc933786f0e486b4ccd140fa32d2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
