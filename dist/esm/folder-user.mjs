export const name="folder-user";
export const id="dl_c50614cb386f4174917c";
export const url=new URL("../icons/folder-user.svg?v=4c4f153fed7cff6b4c3f990b227401280697a02a83213a810ce8f27875be9ab5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
