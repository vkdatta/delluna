export const name="nest_farsight_weather-fill";
export const id="dl_5b68872b72d5da7fd17a";
export const url=new URL("../icons/nest_farsight_weather-fill.svg?v=6537c2c6ee3f05e8044a175241ec72ef8e1d39c61b35a9928604b2283cd038c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
