export const name="code-duotone";
export const id="dl_96c98ec5352e4f42ac94";
export const url=new URL("../icons/code-duotone.svg?v=9b016887c502c6f622a507a76be53a2b47e72ab3495a2807903b0ceeddbef97a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
