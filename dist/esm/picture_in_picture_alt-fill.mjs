export const name="picture_in_picture_alt-fill";
export const id="dl_55d6e5342907c3a9b41b";
export const url=new URL("../icons/picture_in_picture_alt-fill.svg?v=c2b83dc629c2ba72664b61db1d9aa6a55e0572031bf1bdaddd080b1c7da729dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
