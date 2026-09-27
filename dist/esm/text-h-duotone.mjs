export const name="text-h-duotone";
export const id="dl_7ab53eb25d2aebc88ec5";
export const url=new URL("../icons/text-h-duotone.svg?v=0adf3e6fcefe517783430ad14081ad2d7645c0fb040752e2fb56b90450fbe212",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
