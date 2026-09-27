export const name="hands-clapping-fill";
export const id="dl_a4a8806f2c864f3a8d29";
export const url=new URL("../icons/hands-clapping-fill.svg?v=c263938edf16f20aa401dc19ae8a45c25658d923e0ac07ee3db9790dfa4a9d7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
