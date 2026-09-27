export const name="shower-bold";
export const id="dl_6cf1050b7b4ebcf0d867";
export const url=new URL("../icons/shower-bold.svg?v=40e0a9882a06d7a11298e36af6394ec8c447457d8aabe9a7adafe5aef51d9652",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
