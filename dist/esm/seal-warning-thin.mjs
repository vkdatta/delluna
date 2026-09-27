export const name="seal-warning-thin";
export const id="dl_9faf7c2d0335f28188a6";
export const url=new URL("../icons/seal-warning-thin.svg?v=6da8b3ca57f16b8eeb86a7ff11d5147a155f149025345e9bb257f1bb59e3dcaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
