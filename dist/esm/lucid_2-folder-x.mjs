export const name="lucid_2-folder-x";
export const id="dl_454974821fb04eb8bd07";
export const url=new URL("../icons/lucid_2-folder-x.svg?v=5a07ca896ea64e18b29f6234c94ad49d7482f5aeb31332b383f7cf310ded834b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
