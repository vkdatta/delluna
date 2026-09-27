export const name="edit_calendar-fill";
export const id="dl_c184b07780e4cbbdb39d";
export const url=new URL("../icons/edit_calendar-fill.svg?v=3a8487ad469ea35a46433748a628222a35988a7b2b487f0d3633e22ba7b40106",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
