export const name="building-office";
export const id="dl_85a08f01773e4f67a094";
export const url=new URL("../icons/building-office.svg?v=5c104b6d8d3be2ff3ad4299e3ba90664226368748ac4b4005ccf69291b66ea7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
