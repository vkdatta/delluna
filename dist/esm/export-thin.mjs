export const name="export-thin";
export const id="dl_4effbcf301fb4c44ac70";
export const url=new URL("../icons/export-thin.svg?v=f7899ed3a6256c975d1db1dadbbe5a6cbaf37b0d8db2acc1b1b8f50e90786471",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
