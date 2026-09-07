export const name="signpost-light";
export const id="dl_68016dc6500e43ecada2";
export const url=new URL("../icons/S/signpost-light.svg?v=3ef5ee5fda9fedd28cde44948df4c9e2f202c0a58aa6e8d5acbf6c78436da74a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
