export const name="living";
export const id="dl_871252f66d6863b36bcc";
export const url=new URL("../icons/living.svg?v=ebaf69d7ef8d0569eb2a473a1bb572f5a6d8682596091b536f172f2d0e304677",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
