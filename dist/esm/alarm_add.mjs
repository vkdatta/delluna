export const name="alarm_add";
export const id="dl_c01be27fc0d44bdb9f70";
export const url=new URL("../icons/A/alarm_add.svg?v=c3c6ef12688b87e52fdd10dc712d07d2c90e88a49a802e1fab5d17db5b941ea8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
