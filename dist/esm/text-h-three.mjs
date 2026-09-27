export const name="text-h-three";
export const id="dl_9ab786faa927aa9a11a3";
export const url=new URL("../icons/text-h-three.svg?v=a935077727c903a0e5adcd20cbe535cd523606ac2c252b994b0f7ee01e6b67a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
