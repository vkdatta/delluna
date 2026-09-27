export const name="medal";
export const id="dl_a0c024e4840c437095ae";
export const url=new URL("../icons/medal.svg?v=baefd36809b44a5209081bee96f472f991ec0c010a3a01cd1515639d404a4f1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
