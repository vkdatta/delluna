export const name="prescription-duotone";
export const id="dl_c6fa6c44ce3d44939058";
export const url=new URL("../icons/prescription-duotone.svg?v=9838aa5669138f1d0106de7ad9e3f618b26eb2e394f054b05097ef7915506022",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
