export const name="hammer-duotone";
export const id="dl_c45c2ba3eecb402f9da3";
export const url=new URL("../icons/hammer-duotone.svg?v=0b515b336de929c745818a18239c86017acaa530ca600be44bf957684fabf9de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
