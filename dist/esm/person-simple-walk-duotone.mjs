export const name="person-simple-walk-duotone";
export const id="dl_78226f0b2d834d999640";
export const url=new URL("../icons/person-simple-walk-duotone.svg?v=26ab881dea91b7484cd115af1abd38448f26790fb5045538fb31f762384c0be7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
