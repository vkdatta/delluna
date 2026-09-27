export const name="left_panel_open-fill";
export const id="dl_bf69d3698407fb52411a";
export const url=new URL("../icons/left_panel_open-fill.svg?v=573f6c5a95a608a53c5c5f0ad2afed9ad9a825492ee1f53f7648554af6f95f74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
