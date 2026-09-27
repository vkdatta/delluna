export const name="bookmark_check-fill";
export const id="dl_cbe98729bb898288c413";
export const url=new URL("../icons/bookmark_check-fill.svg?v=abcc5975cc85bb5bf9d89c6296cc047b5741e7ed98aaf1abcb50d1648578f257",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
