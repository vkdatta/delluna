export const name="computer-tower-duotone";
export const id="dl_57e603c080b34920be78";
export const url=new URL("../icons/computer-tower-duotone.svg?v=f6f67a5b0ccda33adf59f917786dba5216c744a6e8ea23babecfe55700a63031",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
