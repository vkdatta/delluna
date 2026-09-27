export const name="trash-simple-thin";
export const id="dl_603798aa637e637818d0";
export const url=new URL("../icons/trash-simple-thin.svg?v=323706e2a5a562fa6c1d8a2f6a5453189c95d99f59b479e1e86ec0224ef75c4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
