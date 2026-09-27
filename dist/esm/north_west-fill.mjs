export const name="north_west-fill";
export const id="dl_e5ab44471000e1d64f9b";
export const url=new URL("../icons/north_west-fill.svg?v=872ee09e9eeb1543974dd0bf880d1c044d509c8dea89a3937b73c46fb1a80a10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
