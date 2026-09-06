export const name="gps-fix-thin";
export const id="dl_493c93d3753743b2b806";
export const url=new URL("../icons/gps-fix-thin.svg?v=463417dd9bcf60abdba858456b5ee77d71cad823cc30bd4fda4b7a63c18b7112",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
