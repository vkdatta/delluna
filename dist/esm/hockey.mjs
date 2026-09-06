export const name="hockey";
export const id="dl_388af074191147fcada0";
export const url=new URL("../icons/hockey.svg?v=266dcefc74e9173d993df5727b4fb635781f9646e15f3432f5a32ee6cba218cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
