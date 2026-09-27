export const name="prescription-duotone";
export const id="dl_c6fa6c44ce3d44939058";
export const url=new URL("../icons/prescription-duotone.svg?v=7e0d01ef151beb2aae1ea40f328462ebd3d94aba23845b25e2dbdffc8bd40110",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
