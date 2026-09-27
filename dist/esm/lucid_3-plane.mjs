export const name="lucid_3-plane";
export const id="dl_f8b90b0e829e4892a249";
export const url=new URL("../icons/lucid_3-plane.svg?v=1247187c51899a7d081b52c060053f7b8b7cd026af43b902d6355a160c4e9316",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
