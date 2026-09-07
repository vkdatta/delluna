export const name="plugs-thin";
export const id="dl_fe93f37817054b3f8a02";
export const url=new URL("../icons/plugs-thin.svg?v=a3e8882dd1c914cc373e999bbcded27bde48a9c95eeb00aedb9c52358ff61d40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
