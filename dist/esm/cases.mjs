export const name="cases";
export const id="dl_fde5df9c53e868b1281a";
export const url=new URL("../icons/cases.svg?v=94995ac2214aaa9beff92750dbdaafe1495666f19870b669116d75b25288fe45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
