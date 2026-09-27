export const name="mobile";
export const id="dl_80e9bcf70d0cbcefa0b5";
export const url=new URL("../icons/mobile.svg?v=f19750b979d2e9448a8a420c34f5531027ead7968523470c1752d9639b7fbbd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
