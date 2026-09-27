export const name="energy_program_time_used";
export const id="dl_962d81a3f5dac0db06fb";
export const url=new URL("../icons/energy_program_time_used.svg?v=d0294df2187474af62d8cafb2baf418aca07a980bd8916a9f48e4a4a86e8d461",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
