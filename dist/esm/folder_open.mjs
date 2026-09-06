export const name="folder_open";
export const id="dl_a1577661b02d06b68639";
export const url=new URL("../icons/folder_open.svg?v=46c90bed2325ffd56a60c50c0bf62d3886541bdee655fc98b35ee698d30a9d60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
