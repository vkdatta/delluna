export const name="suitcase";
export const id="dl_5bd928ef1d15495fa9b0";
export const url=new URL("../icons/S/suitcase.svg?v=5bb98fc5efe3ab094f8ec5c5e918d808af0e83cda6ee95eaff79bf343f251003",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
