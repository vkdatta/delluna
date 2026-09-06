export const name="battery-warning-fill";
export const id="dl_5c11111055074d189ce7";
export const url=new URL("../icons/battery-warning-fill.svg?v=7d26d9c894ec450dc12add664c622ffa22f17d6cbd60e8ef30af08f5c874d79b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
