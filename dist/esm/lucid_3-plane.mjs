export const name="lucid_3-plane";
export const id="dl_f8b90b0e829e4892a249";
export const url=new URL("../icons/lucid_3-plane.svg?v=cbd359298c492b822f1db9b9ab045f890ddc7f1d77eca9d6fe5e1d3af1879afc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
