export const name="number-eight-bold";
export const id="dl_607b97efe0d8499daa5b";
export const url=new URL("../icons/number-eight-bold.svg?v=fc19dddd75d0de2039f61c1cc9afde31017c9c7dd520ea22c71775a1d5b0083a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
