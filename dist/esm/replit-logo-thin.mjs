export const name="replit-logo-thin";
export const id="dl_b1a51990440a4ee7b0dc";
export const url=new URL("../icons/replit-logo-thin.svg?v=7eddd9a8522004d42bfd1f46b1e0fb91b1fab409fc16ced20c029ab204066d18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
