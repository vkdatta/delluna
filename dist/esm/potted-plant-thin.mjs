export const name="potted-plant-thin";
export const id="dl_ca70ee650a1c401799ab";
export const url=new URL("../icons/potted-plant-thin.svg?v=206b0042430eec0ae6b486a4ab0e6fa673edff3f209b25684b125b35926c2ce2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
