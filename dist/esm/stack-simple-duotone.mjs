export const name="stack-simple-duotone";
export const id="dl_dbae9863599ed6b4170d";
export const url=new URL("../icons/stack-simple-duotone.svg?v=bcff8a32cd25b12d0b48f7bb6bcb1cbd0d1512e7fbac49615d8b1045ee006bc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
