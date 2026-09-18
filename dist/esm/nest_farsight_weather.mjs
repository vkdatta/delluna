export const name="nest_farsight_weather";
export const id="dl_87c01d4e4fd14c36b43d";
export const url=new URL("../icons/N/nest_farsight_weather.svg?v=4516b08988f5a4f1512c58f5fec53143cf3973473aa5651430d52cce7b200be4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
