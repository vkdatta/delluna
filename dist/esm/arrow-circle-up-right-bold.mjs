export const name="arrow-circle-up-right-bold";
export const id="dl_8ed03b5561424b51a73a";
export const url=new URL("../icons/arrow-circle-up-right-bold.svg?v=dfd728d0da9a6a76e869e595ec4a62caba63163591c25fba211d8c98ac0ff475",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
