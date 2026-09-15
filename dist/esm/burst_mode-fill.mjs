export const name="burst_mode-fill";
export const id="dl_22cda8c61bc64f63be78";
export const url=new URL("../icons/B/burst_mode-fill.svg?v=1d2e786d77fa069e474cee5e1c4c2400fae0395ee6b515c055f3a3f87cd73fc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
