export const name="swimming-pool-duotone";
export const id="dl_4e0d0203503e4c5f3253";
export const url=new URL("../icons/swimming-pool-duotone.svg?v=d8e0c2b5763848aadeaf63a2322d0a55f079fca66f9aeca1334f3a84baf534db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
