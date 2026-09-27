export const name="orange-duotone";
export const id="dl_58dca6f9e1cc437aaf99";
export const url=new URL("../icons/orange-duotone.svg?v=c8a1ec13dfbc8ac91a3baa74ad3a8886c3d6fab33c1239e146e142df92c1537f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
