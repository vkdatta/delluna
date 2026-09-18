export const name="report";
export const id="dl_3d4913d5a77445268e3f";
export const url=new URL("../icons/R/report.svg?v=59aab820732c35fa75d5338886e15eed1c80034ae571ba91d7d406564b81342a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
