export const name="lighthouse-duotone";
export const id="dl_c2f1fa9d64b540ed9e16";
export const url=new URL("../icons/lighthouse-duotone.svg?v=5454ee7a83d3847bd4f982fb8a132f56de80c7e8f6136237b0e3d70e67414be5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
