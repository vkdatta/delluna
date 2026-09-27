export const name="energy_program_saving";
export const id="dl_cd1b2b6ed4ddd14c59e6";
export const url=new URL("../icons/energy_program_saving.svg?v=1e8021d59fee2e9bbdaef3f2cd2c7103fae0e11c5c6bf250c59c4b7a04a65fb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
