export const name="lucid_3-percent";
export const id="dl_4904ed2b7ee04480851e";
export const url=new URL("../icons/lucid_3-percent.svg?v=1bf4443bed9fe496ccdfd30c9f716945f20044afa5874a0825705139153a2814",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
