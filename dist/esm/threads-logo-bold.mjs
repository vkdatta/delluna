export const name="threads-logo-bold";
export const id="dl_8069393ceee1392f8558";
export const url=new URL("../icons/threads-logo-bold.svg?v=4606fe15f9255169e72f1f7304fd224950f9e7856cb1a03342a7075eecba805e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
