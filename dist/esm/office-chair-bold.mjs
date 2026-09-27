export const name="office-chair-bold";
export const id="dl_78392b45531b40619796";
export const url=new URL("../icons/office-chair-bold.svg?v=f9c0a70d0de0fadd083c461185b53dcd72f77b60c4f38b6de054e630e118baed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
