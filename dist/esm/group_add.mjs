export const name="group_add";
export const id="dl_7dcd887c5bdd08d9d15c";
export const url=new URL("../icons/group_add.svg?v=b85b144358e544d49d266d089c076f0a3636033f4f9616747a7d33434adcfc94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
