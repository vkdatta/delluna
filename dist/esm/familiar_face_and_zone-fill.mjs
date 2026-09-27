export const name="familiar_face_and_zone-fill";
export const id="dl_13fc1f459289721e1c3e";
export const url=new URL("../icons/familiar_face_and_zone-fill.svg?v=c9af2d8db12627880c956469f1bbcd219a6ba2b83f4a073fd0e53551d7f5111b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
