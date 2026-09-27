export const name="folder-simple-duotone";
export const id="dl_e7319654ca944f638b8e";
export const url=new URL("../icons/folder-simple-duotone.svg?v=5d8f77381f3d68d4b0c11217eb655c34a66443a4c753148e41c153bb59c62830",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
