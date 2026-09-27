export const name="flowsheet";
export const id="dl_65f2f8d0d24d2b0de2b3";
export const url=new URL("../icons/flowsheet.svg?v=8d5e9bf762230ca3341eb8db1cb7351db687a658743f6f853664244e7cd49604",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
