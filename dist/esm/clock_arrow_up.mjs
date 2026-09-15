export const name="clock_arrow_up";
export const id="dl_e89841d02faf47269f90";
export const url=new URL("../icons/C/clock_arrow_up.svg?v=484357c7f4cb6d9aa3e33495bd3a0c65a17a53b01bd1412e136e90a415e4913b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
