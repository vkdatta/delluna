export const name="number-circle-zero-bold";
export const id="dl_3b33e851942249cd890f";
export const url=new URL("../icons/number-circle-zero-bold.svg?v=08867c271fdab73c06cb88daeb7c7a62031c2f7be5af60e43d13b796a28985d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
