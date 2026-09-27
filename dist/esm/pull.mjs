export const name="pull";
export const id="dl_a8026430ca7a9cf5a37d";
export const url=new URL("../icons/pull.svg?v=aa4c51a2b2a89f016b7a06be848e2fe02e369d945d513b3b351e064fa3975f65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
