export const name="lucid_1-calendar-range";
export const id="dl_1a045a4b908e4ece984d";
export const url=new URL("../icons/lucid_1-calendar-range.svg?v=b33d65e778a17c621fca07c591238d3ddbb421f08e2c4089a51334b52c94c26c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
