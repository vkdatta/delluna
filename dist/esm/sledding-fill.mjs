export const name="sledding-fill";
export const id="dl_4240764428ccd02b6a6b";
export const url=new URL("../icons/sledding-fill.svg?v=d40c1cd4516df832a669622221fd337782f9d724bf0aa0efa98ebae82b0dce05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
