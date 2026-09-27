export const name="macro_auto-fill";
export const id="dl_3cdd99ea3b1d741470f4";
export const url=new URL("../icons/macro_auto-fill.svg?v=1e22a4b09ea9bd36bf7644a585be6d14b87d6f05c3a723cf195e28e97d837e00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
