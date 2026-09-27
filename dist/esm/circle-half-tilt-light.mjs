export const name="circle-half-tilt-light";
export const id="dl_eac70bbb5e12493ea45a";
export const url=new URL("../icons/circle-half-tilt-light.svg?v=3292bf5bb661b00b18d1e7118aa759690f82b2ce1c5707357fcaa69309c56b32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
