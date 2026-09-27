export const name="sort-descending";
export const id="dl_5ea332a41fd359216f43";
export const url=new URL("../icons/sort-descending.svg?v=ab3da5bd9d1905d20bdfefab1c2b716f47d75f4805a726cabb19865460d4575c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
