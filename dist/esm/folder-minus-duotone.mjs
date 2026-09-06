export const name="folder-minus-duotone";
export const id="dl_e6a2d9fa3bc348dda031";
export const url=new URL("../icons/folder-minus-duotone.svg?v=abbb528848a887b20609d76f412eb4c9c7c2739ec3a0cf16812e2caaec22a264",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
