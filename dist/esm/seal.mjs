export const name="seal";
export const id="dl_f7aa41554eaa76052db0";
export const url=new URL("../icons/seal.svg?v=5391af67bba4ea1bf3e4ba6075a1dae9fed0aa25f7cae6570136ce91cddbe1fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
