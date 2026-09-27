export const name="split-vertical-duotone";
export const id="dl_7201ee1d67f9b022a2f8";
export const url=new URL("../icons/split-vertical-duotone.svg?v=cb59c9dec8df021782788108ddd965309c01992554216d25979ced50ebf4ac0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
