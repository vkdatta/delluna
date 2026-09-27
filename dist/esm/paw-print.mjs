export const name="paw-print";
export const id="dl_cec63fd962cf46049a7d";
export const url=new URL("../icons/paw-print.svg?v=45391000e2a5cc9d23f82808ba71ca5734b25b56f422c66b9d247068cb20ca4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
