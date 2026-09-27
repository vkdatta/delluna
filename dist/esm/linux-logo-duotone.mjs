export const name="linux-logo-duotone";
export const id="dl_b5756f421751408e8b50";
export const url=new URL("../icons/linux-logo-duotone.svg?v=c224d32f9b9f85b3bb0c6ca0a2e95f42a8dbc1f53396292ee941858c9270101b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
