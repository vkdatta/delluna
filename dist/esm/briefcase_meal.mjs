export const name="briefcase_meal";
export const id="dl_00d3f1c38c1fdda35f75";
export const url=new URL("../icons/briefcase_meal.svg?v=72375ab55c8c27735893c8950eaf4d455f46ceae075831f6472000a8d4850bf0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
