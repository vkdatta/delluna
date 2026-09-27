export const name="speed_1_75-fill";
export const id="dl_cacbec637a6f0a7bf8ff";
export const url=new URL("../icons/speed_1_75-fill.svg?v=9b3ea9a16f15a3363e26906b220480eb96f83d1d47cedc5105643405f627643c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
