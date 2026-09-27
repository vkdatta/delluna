export const name="rice_bowl";
export const id="dl_dedda5eb235964cfb586";
export const url=new URL("../icons/rice_bowl.svg?v=5bbb8a721e4d5a951bc9c5ea385e0dbd11788cdde2a8f61efde6ed915542155f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
