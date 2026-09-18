export const name="nest_farsight_weather-fill";
export const id="dl_05b21686010d4c3eaffa";
export const url=new URL("../icons/nest_farsight_weather-fill.svg?v=1b162726d289f9ed7dfac41d61e9495c36bf00f2be5fa9a186270cf8a30a7289",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
