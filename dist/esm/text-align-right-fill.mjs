export const name="text-align-right-fill";
export const id="dl_f80beca8ee0e122c1212";
export const url=new URL("../icons/text-align-right-fill.svg?v=e7c62a3f43a85d929f01ec5098401494480821d2f44d532a5c3753a423333d96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
