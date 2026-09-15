export const name="diversity_2";
export const id="dl_12e315364934484d9d73";
export const url=new URL("../icons/D/diversity_2.svg?v=189d8e9aa358f6cd5f122bfcbc2c6be4c125dd09e9a52bbca238a3c82519a041",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
