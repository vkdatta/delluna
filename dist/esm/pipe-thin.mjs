export const name="pipe-thin";
export const id="dl_18f9767805a74f17b85d";
export const url=new URL("../icons/pipe-thin.svg?v=a2553318e511669c7262c5f776c165b30c57fabf8f78e48059706fef8945ea0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
