export const name="crop-duotone";
export const id="dl_a84c9750cf7f4c219f4d";
export const url=new URL("../icons/crop-duotone.svg?v=c70bc6781a9f40feb05e1293b2a8cf53a62fd659e4224fed496f8288968f7967",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
