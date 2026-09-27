export const name="tibia_alt";
export const id="dl_deba2f22bae957b93c5f";
export const url=new URL("../icons/tibia_alt.svg?v=79a475dd8b4b640a9bb0e99790e834f0f9973e388b1e576d597f26cf052dc2b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
