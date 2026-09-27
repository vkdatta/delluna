export const name="full_coverage-fill";
export const id="dl_61babf48b491663d47fd";
export const url=new URL("../icons/full_coverage-fill.svg?v=c196db972c05b628e85cd6ece5d724ac0550bd027eaf6d5770ad91362ac29799",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
