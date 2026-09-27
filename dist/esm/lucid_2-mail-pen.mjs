export const name="lucid_2-mail-pen";
export const id="dl_d39da81917df4c688eec";
export const url=new URL("../icons/lucid_2-mail-pen.svg?v=ea5732665b8bc2a1ff707cc60f90aa5c371aadd9fa118b28bdd627b2cf948def",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
