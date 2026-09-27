export const name="display_add";
export const id="dl_95cb439eca4e9a313a35";
export const url=new URL("../icons/display_add.svg?v=bf31a8bf87d9ce0c8567c7ceafdfadb42d30038759ae71388aef390e13ffaec9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
