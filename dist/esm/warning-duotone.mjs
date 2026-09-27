export const name="warning-duotone";
export const id="dl_42b21a0acb7ab9bb1a74";
export const url=new URL("../icons/warning-duotone.svg?v=114053847d080447a0e7ff4fc63f7795fee4eb726a3575124fef9cbaca0bfebe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
