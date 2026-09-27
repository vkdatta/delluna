export const name="nest_farsight_weather";
export const id="dl_b34a190809b71d5f64d9";
export const url=new URL("../icons/nest_farsight_weather.svg?v=17552a89608a14ac1a883196349cfb72b8aa27eaeda2bb6967cd7f571ca5801d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
