export const name="rabbit-duotone";
export const id="dl_2a473cc2fa0442dd97de";
export const url=new URL("../icons/rabbit-duotone.svg?v=0228ed410d30fdab9a95bd8535fc6d2b12928568a69046f013f144f966a530ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
