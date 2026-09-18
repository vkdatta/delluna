export const name="weather_hail-fill";
export const id="dl_6acbf6cec3a3402a995c";
export const url=new URL("../icons/W/weather_hail-fill.svg?v=00b8612aa33d020531e5dbb5010bc55f91a143bea6169d1d882597808ccbd6f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
