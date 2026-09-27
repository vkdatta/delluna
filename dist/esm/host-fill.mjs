export const name="host-fill";
export const id="dl_1414207d7487ec770e78";
export const url=new URL("../icons/host-fill.svg?v=8c60d17813f4ecb6a46e9dd431927d27151aa73ca974ff9e3ceb64f9054fc649",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
