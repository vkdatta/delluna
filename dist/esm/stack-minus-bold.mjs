export const name="stack-minus-bold";
export const id="dl_743909b8cba00d1a10b6";
export const url=new URL("../icons/stack-minus-bold.svg?v=195420b0355690d5f11cdbf1e1770ca0b85290770ecd3afc10f58f0585293015",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
