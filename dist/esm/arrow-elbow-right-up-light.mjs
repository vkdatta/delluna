export const name="arrow-elbow-right-up-light";
export const id="dl_01180db228314a519a0b";
export const url=new URL("../icons/arrow-elbow-right-up-light.svg?v=9ebafac4ac097c5bb6b7e1c4a3d85ca148ee79ad8c9c2967d391e327f19afb88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
