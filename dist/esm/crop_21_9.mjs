export const name="crop_21_9";
export const id="dl_ff64e170d33368e6574f";
export const url=new URL("../icons/crop_21_9.svg?v=c54b29470a4bd903c4eaa06c2a8da4d55906161b5c2f63883561bb1aa3e5ac0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
