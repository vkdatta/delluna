export const name="article_person";
export const id="dl_009ff3782fff96fd16ea";
export const url=new URL("../icons/article_person.svg?v=4faa5d9701ded086e1b6296af84dc12e447a93dcd349792643fededec9000ed1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
