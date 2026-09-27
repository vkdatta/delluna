export const name="heap_snapshot_multiple";
export const id="dl_a78e850f612badd4325f";
export const url=new URL("../icons/heap_snapshot_multiple.svg?v=172f1c227f775f8619732fe1e5bcca92865e55abcd9d466fbdf91b2f52c713de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
