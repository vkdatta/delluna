export const name="dictionary-fill";
export const id="dl_398e50bc4228f2d702da";
export const url=new URL("../icons/dictionary-fill.svg?v=aa9235585c035361d05e7b708d5df2d178bbe91e0751dcb1dbea85233693d375",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
