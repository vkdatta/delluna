export const name="newspaper-clipping-duotone";
export const id="dl_700d850f0dbb4313b252";
export const url=new URL("../icons/newspaper-clipping-duotone.svg?v=00194d0824c165411ed77882f2159509e7de756cb030ea19013c625c43d144d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
