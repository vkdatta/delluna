export const name="stretch-horizontal";
export const id="dl_bc7bf82fdc7a4947905d";
export const url=new URL("../icons/stretch-horizontal.svg?v=533a733180640d79cfc5b69a6e124fc966b0f83f841b74aa3300c27b21f2409d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
