export const name="17mp";
export const id="dl_34633969ffe4472293ff";
export const url=new URL("../icons/1/17mp.svg?v=de1110a222468e67e5d64928af687592063de4bd985922e99bfb1af07305393a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
