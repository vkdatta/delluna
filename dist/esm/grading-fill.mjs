export const name="grading-fill";
export const id="dl_0424d2a96f5a486e8457";
export const url=new URL("../icons/G/grading-fill.svg?v=203b420b8f572811c16ae014b54bc4c5053051d52a0db1fecebae6d97aaf0e4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
