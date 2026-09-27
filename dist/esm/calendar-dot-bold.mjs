export const name="calendar-dot-bold";
export const id="dl_fb6bf2ec06424d3f88ef";
export const url=new URL("../icons/calendar-dot-bold.svg?v=0fbd005b5995578c745bc003bd6e6f2c2f22f389a024d7a9828cff92ed73d5db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
