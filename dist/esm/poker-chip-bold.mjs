export const name="poker-chip-bold";
export const id="dl_d7fb710acd0d4c79b5ff";
export const url=new URL("../icons/poker-chip-bold.svg?v=0363e9b96cd4d8c505cd20255b664f91d1d0f151a2798351f9482f09c8e880b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
