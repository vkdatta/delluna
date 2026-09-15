export const name="battery_1_bar-fill";
export const id="dl_31243ba055fc485e9563";
export const url=new URL("../icons/B/battery_1_bar-fill.svg?v=977bf1c75548f12416ebc0004d40de78aec52125e38b6506f3fc1456ec6aebe3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
