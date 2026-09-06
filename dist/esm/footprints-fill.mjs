export const name="footprints-fill";
export const id="dl_4decf7cae97b40aeaa48";
export const url=new URL("../icons/footprints-fill.svg?v=0ef8c52817c37a7f9fc62d60861b88f6cffcceadf121d431cce80a5151fa7277",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
