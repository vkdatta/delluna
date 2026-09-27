export const name="barcode-thin";
export const id="dl_d9c0459bba9b4ba7b6fb";
export const url=new URL("../icons/barcode-thin.svg?v=06d3e585a1aea0ea2ff589092449cf5c05e011428e13c8a39a38d2001289162c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
