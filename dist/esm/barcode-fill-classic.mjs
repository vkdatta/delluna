export const name="barcode-fill-classic";
export const id="dl_0b8acd3216d5195dd820";
export const url=new URL("../icons/barcode-fill-classic.svg?v=66831f005f4d12a1c519ee28f49435c690a03c15b74b15e5b3522c69986f6b73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
