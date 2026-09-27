export const name="nest_clock_farsight_analog";
export const id="dl_2db75ed678b6b0d19e79";
export const url=new URL("../icons/nest_clock_farsight_analog.svg?v=040bddfb297bdba32fed410f162821fb21ae8436c272b45396823f3a6a70353e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
