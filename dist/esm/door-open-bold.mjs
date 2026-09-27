export const name="door-open-bold";
export const id="dl_25eea19baafe4265a4f8";
export const url=new URL("../icons/door-open-bold.svg?v=76a55c0cbc573356b74813276f81055441edef6135990045d25f7bf6a84a03b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
