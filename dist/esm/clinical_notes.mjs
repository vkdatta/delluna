export const name="clinical_notes";
export const id="dl_3731f72e78ea4a60867e";
export const url=new URL("../icons/C/clinical_notes.svg?v=a701e077ac85ba38d48c2420bfdd71de745635fa593493770114aa4c38bd2316",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
