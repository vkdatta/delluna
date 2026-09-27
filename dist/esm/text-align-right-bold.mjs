export const name="text-align-right-bold";
export const id="dl_669f519b2cc7f6fb978c";
export const url=new URL("../icons/text-align-right-bold.svg?v=f7218b2e4391e0fdd4aada2b93451825617f4a435695e3e1ab8c1fe658be111f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
