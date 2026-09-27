export const name="thermometer_gain-fill";
export const id="dl_ba856818234b33ff5d9e";
export const url=new URL("../icons/thermometer_gain-fill.svg?v=13414d742e39aaad685bf6288f287c6b1151cc16dbae428c2118d20637186867",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
