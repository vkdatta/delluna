export const name="pen-nib-straight-duotone";
export const id="dl_4f0d3d3aa19545e2a71b";
export const url=new URL("../icons/pen-nib-straight-duotone.svg?v=a381e447c3a8ac09971fb3eb5885fc8de5eb4bd326a11c476db535bc5402af47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
