export const name="groups";
export const id="dl_efa4da008a7b4af0ae67";
export const url=new URL("../icons/G/groups.svg?v=7d8e3002a6ce80890b3771baeccf9579c25ecf6ddcf212fd59905c18c0e207ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
