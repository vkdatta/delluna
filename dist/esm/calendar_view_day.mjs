export const name="calendar_view_day";
export const id="dl_281f1d4660d9ff5591ad";
export const url=new URL("../icons/calendar_view_day.svg?v=2c73f9bf2ee06d3c747d8d2bdba48865c42ef20b6a2ea0a9ce1ff26a95df7f62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
