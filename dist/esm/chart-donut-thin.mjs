export const name="chart-donut-thin";
export const id="dl_27974af4aa0d4800ad3d";
export const url=new URL("../icons/chart-donut-thin.svg?v=95df58ffa40133d759efad51fed066b6486861cfdfbbcfa3aac3849bffecb568",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
