export const name="iron-fill";
export const id="dl_f1202c52913ca838444f";
export const url=new URL("../icons/iron-fill.svg?v=9c1590a1078cbdc180e8ddc787efac19499ba49ae7288007addbbde9b8620bf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
