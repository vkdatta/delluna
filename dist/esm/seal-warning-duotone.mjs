export const name="seal-warning-duotone";
export const id="dl_f2082797c41402a0ba7b";
export const url=new URL("../icons/seal-warning-duotone.svg?v=5f33e2fa5811e3892d1a55ec810722852df8d9d6324c96202b2fb1d28e880bd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
