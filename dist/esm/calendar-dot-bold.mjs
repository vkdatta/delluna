export const name="calendar-dot-bold";
export const id="dl_fb6bf2ec06424d3f88ef";
export const url=new URL("../icons/calendar-dot-bold.svg?v=84f83215a5ecc38478eb3294c71475a6869f5a06bd5acf299c767196b584a7fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
