export const name="battery_charging_30_2-fill";
export const id="dl_f1deb6d4add02f69bec6";
export const url=new URL("../icons/battery_charging_30_2-fill.svg?v=1606fbed3beec9439747d330a203ea46d6ff840c2719211278ca9f24be72d4ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
