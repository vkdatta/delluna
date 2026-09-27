export const name="lucid_3-panel-right-dashed";
export const id="dl_fede5f249a6d42529fc8";
export const url=new URL("../icons/lucid_3-panel-right-dashed.svg?v=099b8c440237e526406259b4d2a7638a1286df053f174b3e832792f00c85064c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
