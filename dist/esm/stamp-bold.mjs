export const name="stamp-bold";
export const id="dl_fab1959a9b08757cb42f";
export const url=new URL("../icons/stamp-bold.svg?v=3ffe20834fd3a8068141eb2b42b1b3375baca9b59ce6aca2c4c7f2fe39d59dd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
