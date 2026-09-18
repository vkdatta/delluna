export const name="next_week-fill";
export const id="dl_f2ecdf1539214ab9b584";
export const url=new URL("../icons/next_week-fill.svg?v=547e95be203256f48a0fcf8e49fc09059133eff71f378cffea68aabbdc9e0138",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
