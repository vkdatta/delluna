export const name="cake-duotone";
export const id="dl_c2ab0027138442ed99d0";
export const url=new URL("../icons/cake-duotone.svg?v=af71baa9ca7b814f262850ace18d6a9439f6d2967895cb4cc360362d89cb81c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
