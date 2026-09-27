export const name="17mp";
export const id="dl_1da5c7ca6a0c73351f27";
export const url=new URL("../icons/17mp.svg?v=de1110a222468e67e5d64928af687592063de4bd985922e99bfb1af07305393a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
