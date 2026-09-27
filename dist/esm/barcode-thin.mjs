export const name="barcode-thin";
export const id="dl_d9c0459bba9b4ba7b6fb";
export const url=new URL("../icons/barcode-thin.svg?v=99e7e812f107b700ddca020dfe36846b6e690ce5aff3b3973d0cc529605ebe03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
