export const name="list-checks-bold";
export const id="dl_cf3be4551a79499b97cb";
export const url=new URL("../icons/list-checks-bold.svg?v=7187057b879015089b18a8e8469496a84c68662c03379cba2ef684fb37cda905",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
