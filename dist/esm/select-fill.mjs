export const name="select-fill";
export const id="dl_275f6640831541423fb1";
export const url=new URL("../icons/select-fill.svg?v=de38ace1e039f1ec5237159d1fbd91e3a0871797b2e7832e86d46517149e6030",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
