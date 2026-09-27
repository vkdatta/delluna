export const name="wind_power-fill";
export const id="dl_19416830e0481bf6b0c9";
export const url=new URL("../icons/wind_power-fill.svg?v=7a80a8b2ff9bf8cbee0ef5dfde46f5cc049d6b5362f21d0fe56dc5435f6f767e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
