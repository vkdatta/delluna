export const name="folder-simple-user-fill";
export const id="dl_c976d4f57e554f9e9b62";
export const url=new URL("../icons/folder-simple-user-fill.svg?v=dbe45b364c8930bbd4dc89f56f848cbae1cc693d1e48043d1441cba28bc35cae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
