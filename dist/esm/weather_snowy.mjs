export const name="weather_snowy";
export const id="dl_23891dd97f61c91c0e1e";
export const url=new URL("../icons/weather_snowy.svg?v=ad068442008bca6cf956cfe388369020b7a50a733aacb3058bb52f3e894230b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
