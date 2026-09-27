export const name="pen-nib-straight-duotone";
export const id="dl_4f0d3d3aa19545e2a71b";
export const url=new URL("../icons/pen-nib-straight-duotone.svg?v=f311d41eff82475933e8d30012ca5df59bb4b766bdccb2e526c2affbc590240b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
