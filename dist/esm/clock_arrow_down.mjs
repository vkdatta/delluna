export const name="clock_arrow_down";
export const id="dl_63afcde1bb5641788501";
export const url=new URL("../icons/clock_arrow_down.svg?v=105659cf6ee46130782e4e9b7086d5d23862d40da5c3d3cd9a5f7792119d928e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
