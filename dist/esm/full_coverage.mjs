export const name="full_coverage";
export const id="dl_3a4911e4d960146954bf";
export const url=new URL("../icons/full_coverage.svg?v=0ac0dc7930e2f4117c58f4e6605e086a6b4be39f7e386722255059f743ea8af8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
