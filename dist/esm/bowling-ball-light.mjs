export const name="bowling-ball-light";
export const id="dl_160931d596e84f33a01f";
export const url=new URL("../icons/bowling-ball-light.svg?v=884f603b3c76ed8dd5b3cf2544fe69fbfa52d0fa32e1001f33b6cfd411a9e09c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
