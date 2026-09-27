export const name="docs_apps_script";
export const id="dl_99971ad1f7b2c8d3e99a";
export const url=new URL("../icons/docs_apps_script.svg?v=914672d00afe7fb02039644189ffd0ed90930be9c679c540cfc7c843ad4a7c06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
