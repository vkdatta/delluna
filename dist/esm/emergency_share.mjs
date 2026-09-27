export const name="emergency_share";
export const id="dl_48c9ea54b8ea2b1e6b2c";
export const url=new URL("../icons/emergency_share.svg?v=80a2601430cba4081989a5fb798588787d416e4e432cd8592f1a260a9df4058a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
