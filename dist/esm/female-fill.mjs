export const name="female-fill";
export const id="dl_58a76d6dfcc45677faa7";
export const url=new URL("../icons/female-fill.svg?v=42fff490ffe0583792e98b5b33fdf4e3202eeed02f547ec294a135219270bc45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
