export const name="humerus_alt-fill";
export const id="dl_520e4885e7b56a7055b9";
export const url=new URL("../icons/humerus_alt-fill.svg?v=645d26c0c9738d924fda91554ecc12779c3f16487aeb7d8bd439727c54aee35d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
