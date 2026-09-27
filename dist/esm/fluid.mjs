export const name="fluid";
export const id="dl_ccc15f572a37434160df";
export const url=new URL("../icons/fluid.svg?v=1b7331081dc76ec2e6b528be09b8013d8c7488f0dadaa9673c345e1f23300a85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
