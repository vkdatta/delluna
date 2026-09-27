export const name="top_panel_close-fill";
export const id="dl_e44b8c7bbe5924f23082";
export const url=new URL("../icons/top_panel_close-fill.svg?v=adc6f16be559a052b754277224beb173b1274fecedfbbaa5c0663c3c1bef8475",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
