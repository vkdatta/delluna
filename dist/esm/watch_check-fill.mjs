export const name="watch_check-fill";
export const id="dl_628e98c596e343e4c17a";
export const url=new URL("../icons/watch_check-fill.svg?v=20c739bfffb30222df7c4c54b955a0355d42a4a242800b117e534ef806841f72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
