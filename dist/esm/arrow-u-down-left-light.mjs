export const name="arrow-u-down-left-light";
export const id="dl_f1bcabbbd72d47e595d5";
export const url=new URL("../icons/arrow-u-down-left-light.svg?v=7a18f2d134fe7f90857301a3547a65833beeed625e283fb637d5423ef5330949",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
