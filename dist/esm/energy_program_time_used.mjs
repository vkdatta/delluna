export const name="energy_program_time_used";
export const id="dl_90b72242607139c46cf3";
export const url=new URL("../icons/energy_program_time_used.svg?v=11ffadbffe5d4da85d5baa180c9e1e4629c259d996cc64e28b5272b6f8a493aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
