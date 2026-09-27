export const name="crop_2_3-fill";
export const id="dl_a3b64dd710a84d8a9599";
export const url=new URL("../icons/crop_2_3-fill.svg?v=7e36921601a4c0f8031f95c6b99692b39b8c503427ad3fd06180fb21f5211b97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
