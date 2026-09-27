export const name="weather_mix-fill";
export const id="dl_0cd611a9025fefbace81";
export const url=new URL("../icons/weather_mix-fill.svg?v=4ea1daddc185c9aedfcf3f72baece07edd98e593ec558c0731f10d94c5544498",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
