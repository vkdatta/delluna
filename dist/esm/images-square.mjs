export const name="images-square";
export const id="dl_13d08508bbd346eaa6e4";
export const url=new URL("../icons/images-square.svg?v=fedbeb9b4d40f26b638fdf3b2fd88655c8a3c4b3e213661b2f1dcbd38b2b4606",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
