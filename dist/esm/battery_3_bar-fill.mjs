export const name="battery_3_bar-fill";
export const id="dl_66b80cccd08ca4f2d92c";
export const url=new URL("../icons/battery_3_bar-fill.svg?v=2bd10791159ade71707016b3f5f0c9504790460d045c9e6daa0224c9b9792588",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
