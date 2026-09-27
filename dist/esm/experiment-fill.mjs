export const name="experiment-fill";
export const id="dl_d6d83b0ec9dd235ba524";
export const url=new URL("../icons/experiment-fill.svg?v=5e2a99c2eacc372e50af5f8bf4dbcbd4f39a786856336897ecde04c02ade24b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
