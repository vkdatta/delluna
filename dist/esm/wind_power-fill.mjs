export const name="wind_power-fill";
export const id="dl_7e0c4857394729649df7";
export const url=new URL("../icons/wind_power-fill.svg?v=23e4d30755ffbaef5fe22da4eca0faedfb967bd84e9aa45cd749e5392f8bb6c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
