export const name="flashlight-duotone";
export const id="dl_a4665ff80bad45daada9";
export const url=new URL("../icons/flashlight-duotone.svg?v=c1d3be1e962bfcb517cf7471a85feb6bf693e1d3d74e60d01211885ce2a19a11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
