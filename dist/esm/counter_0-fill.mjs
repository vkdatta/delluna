export const name="counter_0-fill";
export const id="dl_4ddba24781df49d4b9d3";
export const url=new URL("../icons/C/counter_0-fill.svg?v=c75d6d2d0a57b923f825725409f541570468d72138adecb323346bcd0fb2797f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
