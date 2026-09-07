export const name="lucid_3-omega";
export const id="dl_ddee26e284b54b21bf22";
export const url=new URL("../icons/lucid_3-omega.svg?v=26b1bdbc301328ca396ae0b0dd6198ce0c1e6d0d644ec7347b959de34a635c46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
