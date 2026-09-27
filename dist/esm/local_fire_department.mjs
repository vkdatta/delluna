export const name="local_fire_department";
export const id="dl_b9cec9e98583ab3a423c";
export const url=new URL("../icons/local_fire_department.svg?v=d87d1dca3ebb3bfc4cc8b0240227dc37bc2cc45d4ceb96bd3f1fa86b9c297ff5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
