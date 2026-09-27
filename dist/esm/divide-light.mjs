export const name="divide-light";
export const id="dl_1d97d5de21a540afbd89";
export const url=new URL("../icons/divide-light.svg?v=d4a0d64e2167a091d67325c7719b5c5d3316545c28ac0251271daa7fc516c55b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
