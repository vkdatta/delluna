export const name="plugs-connected-duotone";
export const id="dl_b30be1f098af49729382";
export const url=new URL("../icons/plugs-connected-duotone.svg?v=e9d68c1215a5d0135d2639763afe05c53d54c59f89a5893fb89af5bad74ec548",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
