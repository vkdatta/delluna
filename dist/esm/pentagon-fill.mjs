export const name="pentagon-fill";
export const id="dl_811422cda0034f7d9713";
export const url=new URL("../icons/pentagon-fill.svg?v=6b4ba8ddc4713c64d80a75b8f5ab0a725dc27516028d0d89d27ee3ebca3252ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
