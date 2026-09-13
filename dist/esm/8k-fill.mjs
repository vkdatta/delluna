export const name="8k-fill";
export const id="dl_9a2c64887f434d91aaea";
export const url=new URL("../icons/8/8k-fill.svg?v=cdef4adf1e5fc0ebb1c36128a95a1203821eb16034cc81ae1beb3be0df2a3dcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
