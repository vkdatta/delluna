export const name="lucid_2-folder-open";
export const id="dl_fdf9e76875f74e1b83a2";
export const url=new URL("../icons/lucid_2-folder-open.svg?v=4a7cb810d27a6a9b7ba6e67faf94cce16b420b6adbd3d43d9aa7a33f5a6ab826",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
