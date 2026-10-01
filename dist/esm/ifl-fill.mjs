export const name="ifl-fill";
export const id="dl_e7c11f84c4a2a92c3a3a";
export const url=new URL("../icons/ifl-fill.svg?v=976a24f98fbebf05681c205ce0884549b301138582aad220db205cb3ef86a9aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
