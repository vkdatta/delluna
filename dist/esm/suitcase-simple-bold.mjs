export const name="suitcase-simple-bold";
export const id="dl_a48a3974188649209055";
export const url=new URL("../icons/S/suitcase-simple-bold.svg?v=f9b233ef30e3735916831296e8cc4c35e3438401956df39f01ae6b706d02c310",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
