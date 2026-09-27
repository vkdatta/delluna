export const name="mode_heat_cool-fill";
export const id="dl_97e87cc7393fc7cb0b64";
export const url=new URL("../icons/mode_heat_cool-fill.svg?v=eea4a295fb1fbe07d08bbac256f7779c758b0fd9e2f2844c3b8909233084c462",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
