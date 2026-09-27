export const name="speaker_group";
export const id="dl_9e7fe63cc373cc1f48c5";
export const url=new URL("../icons/speaker_group.svg?v=0dfabcd60fe2a6411ac181be6a7ecccad84bf812923af119c0c3cc79bc5827d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
