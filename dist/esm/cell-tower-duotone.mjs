export const name="cell-tower-duotone";
export const id="dl_de4a287bc9034807af25";
export const url=new URL("../icons/cell-tower-duotone.svg?v=91c83f17aec80862544c1827b32f6bb156088bb82dee32fe2791601acbf9370b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
