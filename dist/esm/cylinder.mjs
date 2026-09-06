export const name="cylinder";
export const id="dl_b96b90bc90584f22ad4b";
export const url=new URL("../icons/cylinder.svg?v=f890fdb4ac5b054e733fef67e5ac60c137f8511b282ef6b54b46c1eb27f9b737",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
