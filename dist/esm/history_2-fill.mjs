export const name="history_2-fill";
export const id="dl_55d3f6de42cc220fa208";
export const url=new URL("../icons/history_2-fill.svg?v=7100b5d795b6c88ee97e1834121a8d0b25088690ac00801a2c0f5760803a06c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
