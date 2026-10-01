export const name="workspaces";
export const id="dl_82daf32731dd53df3ae1";
export const url=new URL("../icons/workspaces.svg?v=b26b5ba884ec4ad65ed74d2b7340bfb24e5d15c74b32ae7fa33fc1786ba85db3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
