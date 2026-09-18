export const name="collapse_content-fill";
export const id="dl_ae8b0aa63b75471f8da4";
export const url=new URL("../icons/collapse_content-fill.svg?v=dced44894fda7d21b3260ea2f40149ae6c0b304e31a8300fd226015e533567cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
