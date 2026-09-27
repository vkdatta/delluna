export const name="local_taxi-fill";
export const id="dl_da87d4bdc1c1cf7afb25";
export const url=new URL("../icons/local_taxi-fill.svg?v=7180884589f4afe34301ead5a3b3a618129b59476455ff227cdd868ff909361c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
