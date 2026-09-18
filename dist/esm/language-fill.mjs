export const name="language-fill";
export const id="dl_2bba4590fcb044c98d56";
export const url=new URL("../icons/L/language-fill.svg?v=4093d617c3b423bb149ed5639dda6d4c870f2d3b5b5cc608f0fdb09a1d9fe4f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
