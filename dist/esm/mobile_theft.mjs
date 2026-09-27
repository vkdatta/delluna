export const name="mobile_theft";
export const id="dl_1b1700f97f46905fdc55";
export const url=new URL("../icons/mobile_theft.svg?v=bf9261db881ae8010c21fc0cee56ac70abdaf7c91187dffacfcf982ed3298fee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
