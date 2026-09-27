export const name="layers";
export const id="dl_62d8090039855cd01a0a";
export const url=new URL("../icons/layers.svg?v=7f0f1b6ac4392fcb56ea4cba95b65673746e2c61cb8611afcc2c133c26e17178",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
