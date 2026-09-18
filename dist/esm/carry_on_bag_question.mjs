export const name="carry_on_bag_question";
export const id="dl_8ea460050f804eb88f41";
export const url=new URL("../icons/carry_on_bag_question.svg?v=9b8765e38aeb6e0cbbd11a7f3603afc6ab4c9c4e920c349566ccd3acdfe237b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
