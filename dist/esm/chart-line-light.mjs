export const name="chart-line-light";
export const id="dl_b7ad06951b994dbdb3b7";
export const url=new URL("../icons/chart-line-light.svg?v=58cd3ee3d59ab97ba618a4082bde19df2a0424484f43a9e98f541a4594b001d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
