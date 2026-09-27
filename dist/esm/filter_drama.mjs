export const name="filter_drama";
export const id="dl_a9ce0e187d2edb311c81";
export const url=new URL("../icons/filter_drama.svg?v=03a3323eac55995d72e2008bd814df1b4b7b3e782dc3bf70a3fb257116660235",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
