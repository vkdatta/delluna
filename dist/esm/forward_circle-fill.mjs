export const name="forward_circle-fill";
export const id="dl_69d74ed186db43108c12";
export const url=new URL("../icons/forward_circle-fill.svg?v=2a480cef80a50c7299a52eaf4ad69b4fdfa3b81de2fc58f29070717e74a60120",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
