export const name="stack-minus-thin";
export const id="dl_f7f04594279311f6ddac";
export const url=new URL("../icons/stack-minus-thin.svg?v=75d00f4708d88113b0c30713beeaee4d00db2aba38b03c6927f4c309e1a6e5ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
