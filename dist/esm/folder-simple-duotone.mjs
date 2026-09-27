export const name="folder-simple-duotone";
export const id="dl_e7319654ca944f638b8e";
export const url=new URL("../icons/folder-simple-duotone.svg?v=569aa8c67208a53c63690d0948f19dce84779bb4961385c2527f6edb8347e2aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
