export const name="water_ec";
export const id="dl_f614b0f77773980293ee";
export const url=new URL("../icons/water_ec.svg?v=6ca18b9937a95d925feba734da9d153382e4ef8ee4c1d45f492350a8fd455993",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
