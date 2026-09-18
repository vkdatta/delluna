export const name="rule_folder-fill";
export const id="dl_50a4e7971b134e10aa24";
export const url=new URL("../icons/R/rule_folder-fill.svg?v=a9900c747849bdd455f22192319ee87da43c0484f22e6a808425a26535ac88f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
