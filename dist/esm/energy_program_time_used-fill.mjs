export const name="energy_program_time_used-fill";
export const id="dl_8a88ef5fde3014374641";
export const url=new URL("../icons/energy_program_time_used-fill.svg?v=0f317219f9c589d139d781a69df863c0d31ef0304952b3bbfb7e7cd9628c6378",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
