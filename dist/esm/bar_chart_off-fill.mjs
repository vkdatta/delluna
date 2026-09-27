export const name="bar_chart_off-fill";
export const id="dl_7d9f4160b1f880c36d9f";
export const url=new URL("../icons/bar_chart_off-fill.svg?v=e4cf115df761954bb0ce6fb7b617db46ba705d82365284d2767a69b03b3af4a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
