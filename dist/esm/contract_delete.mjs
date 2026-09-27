export const name="contract_delete";
export const id="dl_b9929dc44fe8ce02ab91";
export const url=new URL("../icons/contract_delete.svg?v=6aaf18a353c67d26fbb75039efe26c95ae56d0957dd5b649594777578de14d2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
