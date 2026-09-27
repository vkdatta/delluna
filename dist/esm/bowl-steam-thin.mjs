export const name="bowl-steam-thin";
export const id="dl_5269aad3c09242e5a6d0";
export const url=new URL("../icons/bowl-steam-thin.svg?v=319095306ae46bf8fa1f968f58fbd96fd0351eca362a7d181c625c2b25edf6da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
