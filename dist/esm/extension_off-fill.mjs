export const name="extension_off-fill";
export const id="dl_330ec8e04efe7fc99b9c";
export const url=new URL("../icons/extension_off-fill.svg?v=1ecc5f510d3493e81f9a4dad05a6a566f5b42fcb2cb1444b1d721035e9d03487",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
