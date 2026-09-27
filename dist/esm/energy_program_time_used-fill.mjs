export const name="energy_program_time_used-fill";
export const id="dl_bf9e55735dbc512b6d17";
export const url=new URL("../icons/energy_program_time_used-fill.svg?v=1d45577109acae5071ecee2d4428f0361f701522d89b83efacaa0bc936d81d23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
