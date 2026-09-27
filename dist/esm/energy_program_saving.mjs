export const name="energy_program_saving";
export const id="dl_1b507b8e632d984f6802";
export const url=new URL("../icons/energy_program_saving.svg?v=17df30c7c1e4cc24154a2713d2de14888f658132d60f61bfe553210e206c85f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
