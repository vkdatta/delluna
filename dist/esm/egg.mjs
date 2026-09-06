export const name="egg";
export const id="dl_50f53e773ecc4bdc8bd0";
export const url=new URL("../icons/egg.svg?v=a8dd8139c28a5ad8832cb7912e7079695bf1afcc6616bad4e86f8e54ec86daca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
