export const name="align-right-duotone";
export const id="dl_d598bd3daa554aba94d3";
export const url=new URL("../icons/align-right-duotone.svg?v=64990eaf96f03a64057615062bd1f30836eb1500eee70070873464bfc66355d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
