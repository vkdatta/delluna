export const name="notebook-thin";
export const id="dl_acac62fe5c1747a9b2f9";
export const url=new URL("../icons/notebook-thin.svg?v=184df029c331368b5edaeb1d5802de12ff521f8b427f6fb663d9c9103891a749",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
