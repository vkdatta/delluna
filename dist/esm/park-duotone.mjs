export const name="park-duotone";
export const id="dl_8ddafb2ddc9444eead1c";
export const url=new URL("../icons/park-duotone.svg?v=77484530c6607ad2df76c56134c79cc925399ab97e73af47db851cf5d71afc50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
