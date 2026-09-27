export const name="folder-simple-user";
export const id="dl_c8f62b0596d64e7aa0f7";
export const url=new URL("../icons/folder-simple-user.svg?v=03789942fa4460d2ecf4d3cf6ef22ef790729ad980c6fbd94fe4cf1445a965b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
