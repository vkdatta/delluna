export const name="acorn";
export const id="dl_1dadcb4d660e490cb9ed";
export const url=new URL("../icons/acorn.svg?v=7375b4427a1b9c7458f4655485d4467dd4c1d460ce22a905c0c2d47454ed265f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
