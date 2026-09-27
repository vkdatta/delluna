export const name="screenshot_monitor-fill";
export const id="dl_35595b3e550ac198f7e2";
export const url=new URL("../icons/screenshot_monitor-fill.svg?v=58fa9d3dfeb2c71d471528b6665ff883b7d5e5a0ffdc6b256598eafc2156b75d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
