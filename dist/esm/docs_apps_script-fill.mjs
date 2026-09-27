export const name="docs_apps_script-fill";
export const id="dl_75fc3d3d9435733161f9";
export const url=new URL("../icons/docs_apps_script-fill.svg?v=af6add584af8d47cefc721373228e756940994f844b3d2ac31b8fbd4b14c5176",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
