export const name="energy_program_time_used-fill";
export const id="dl_fe5164f0d4b33e8a0f3c";
export const url=new URL("../icons/energy_program_time_used-fill.svg?v=c8071a4c0e367a52ed06094ec1a76fefa1a74bf445021af1b03b623860962fb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
