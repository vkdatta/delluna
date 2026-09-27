export const name="calendar_view_day";
export const id="dl_f5b984733d3011c45847";
export const url=new URL("../icons/calendar_view_day.svg?v=706fcaf2dca8c48656050f01d627da41ca163b12dbdd2633adb69314576d8562",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
