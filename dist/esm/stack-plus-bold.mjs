export const name="stack-plus-bold";
export const id="dl_6c167404ac0642c59401";
export const url=new URL("../icons/stack-plus-bold.svg?v=e3aa874810d3906c19ed3ce4febb85fbd948a8bf655735d381336ab2b3dba1d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
