export const name="newspaper-clipping-bold";
export const id="dl_91db09d9189d42168c2e";
export const url=new URL("../icons/newspaper-clipping-bold.svg?v=275400d86045e3e751ee4586c2255f5680ae434a427d25aaa71a888f90de04aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
