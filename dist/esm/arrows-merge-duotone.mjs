export const name="arrows-merge-duotone";
export const id="dl_d081f0086fc94759adfc";
export const url=new URL("../icons/arrows-merge-duotone.svg?v=f566af3fb7824df151089f08ed907c355a28a176a6722e43a709ef70ebbd7bad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
