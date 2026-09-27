export const name="derivative";
export const id="dl_05742197d65b4747beca";
export const url=new URL("../icons/derivative.svg?v=897870c7dc04bb0f46a5097118e6da411b036ca6be9a2052e9a93abc74ede1af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
