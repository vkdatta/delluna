export const name="cheer";
export const id="dl_3b8d02b41615b787301f";
export const url=new URL("../icons/cheer.svg?v=ad862e318f4ae8e0183d4ab220cf6f184ec67b5f72bec829d4d64f4bc0dfa70a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
