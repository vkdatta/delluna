export const name="lucid_3-omega";
export const id="dl_ddee26e284b54b21bf22";
export const url=new URL("../icons/lucid_3-omega.svg?v=152ff2577915566e74fbb15db959308a03a26669c49fcce1a06cc7000a3d042b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
