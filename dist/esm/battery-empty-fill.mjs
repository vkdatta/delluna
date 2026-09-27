export const name="battery-empty-fill";
export const id="dl_b9686e4307d94e31bdad";
export const url=new URL("../icons/battery-empty-fill.svg?v=efba51d49088d048f7d296ba00a2459a9e1996d81522bb56d8306ae2047ae5a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
