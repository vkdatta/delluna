export const name="lucid_2-folder-open-dot";
export const id="dl_8e4516a25fe848bba119";
export const url=new URL("../icons/lucid_2-folder-open-dot.svg?v=8fcb2c2a4e016f46248d8dc7cb724a3d698cf4ccfa0ff9745de2f79a8a67c4fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
