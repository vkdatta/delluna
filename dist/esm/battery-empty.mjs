export const name="battery-empty";
export const id="dl_6a78310e49bc483e93b6";
export const url=new URL("../icons/battery-empty.svg?v=efba51d49088d048f7d296ba00a2459a9e1996d81522bb56d8306ae2047ae5a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
