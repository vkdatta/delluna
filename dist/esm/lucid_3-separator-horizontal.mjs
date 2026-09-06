export const name="lucid_3-separator-horizontal";
export const id="dl_655b581df49941dea478";
export const url=new URL("../icons/lucid_3-separator-horizontal.svg?v=33509f19a1453a0857f2cb6b32bd6076c4381e8f159f846caa54798671b308d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
