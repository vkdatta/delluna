export const name="threads-logo-duotone";
export const id="dl_ab85b60100f2b9c4e58a";
export const url=new URL("../icons/threads-logo-duotone.svg?v=4f063ee1bcae918e6c463a845eaf4475aa8b916f899d248a80dbd83e44f35250",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
