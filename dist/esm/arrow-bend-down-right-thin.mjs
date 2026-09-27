export const name="arrow-bend-down-right-thin";
export const id="dl_fcc8a8fae6a74b36bc47";
export const url=new URL("../icons/arrow-bend-down-right-thin.svg?v=716b0257771439c0a21738bb8154ebaaa10698fb459b19742690fa3acd30c37f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
