export const name="auto_delete";
export const id="dl_139d918e1b93bb52f4f0";
export const url=new URL("../icons/auto_delete.svg?v=29df2cde3dcb4431e23a665e00d53a725cfc3eae5600d280d274fb3d8f0ffa78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
