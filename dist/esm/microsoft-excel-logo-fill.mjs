export const name="microsoft-excel-logo-fill";
export const id="dl_8b2ea4e45ced4828ace3";
export const url=new URL("../icons/microsoft-excel-logo-fill.svg?v=ba0c81ed88e2b9d282fc751dcceca5d680102cd1170df745237dbed538123e4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
