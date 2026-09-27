export const name="x-circle-fill";
export const id="dl_deef071e75be3b9c246e";
export const url=new URL("../icons/x-circle-fill.svg?v=5ad1868244c6a6b12cc22d1ffe2fc3e063e0e4d1ef5e6b2c496648d7d0dc44e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
