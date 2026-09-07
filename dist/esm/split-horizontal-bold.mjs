export const name="split-horizontal-bold";
export const id="dl_7b7d9aff8ea4479ebc70";
export const url=new URL("../icons/S/split-horizontal-bold.svg?v=6a3678145a9c7c059eb3ee9cc941913d228bd7890edcb446482b39ec03c4c13b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
