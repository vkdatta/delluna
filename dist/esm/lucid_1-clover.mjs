export const name="lucid_1-clover";
export const id="dl_50db1593ceb44fcbac69";
export const url=new URL("../icons/lucid_1-clover.svg?v=5ef7745a6bd3f844ea36490d3a53ee037ccf390b346f596311febd31c8db6518",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
