export const name="hand-pointing-duotone";
export const id="dl_55c25ea545354f21812a";
export const url=new URL("../icons/hand-pointing-duotone.svg?v=b8161d07744cc7b3d51bcc2ea7eeda6b3147d16c92a7dc275a193620f66edcfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
