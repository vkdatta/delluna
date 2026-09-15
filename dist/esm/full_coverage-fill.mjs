export const name="full_coverage-fill";
export const id="dl_065bf630641d47c48061";
export const url=new URL("../icons/F/full_coverage-fill.svg?v=f8d39a8972f0e08ac2432fab72655a3c0bfa2a7411426ddfbe56bd8b446854a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
