export const name="bandaids-thin";
export const id="dl_a7a9fa03a46844399eb5";
export const url=new URL("../icons/bandaids-thin.svg?v=f12e8b8ec384ada7020c649d8e6d4e64edf12eacba7674e2133a5ad1e7c13030",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
