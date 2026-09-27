export const name="person-simple-walk-light";
export const id="dl_959b42308b3641889804";
export const url=new URL("../icons/person-simple-walk-light.svg?v=9fd146ba69858770b7c3d13b7f1eb3416d01e898c66d24bb33f0ebdaa0b894f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
