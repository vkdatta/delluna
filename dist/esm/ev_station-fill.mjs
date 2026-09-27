export const name="ev_station-fill";
export const id="dl_2c0cafff542513ed68be";
export const url=new URL("../icons/ev_station-fill.svg?v=7fbf03dbb2d697f5f25fe8dc25721535386c471d307e54ba00fd0be3b97ecd02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
