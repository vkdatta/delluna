export const name="line_end-fill";
export const id="dl_5216894ea162c24f507d";
export const url=new URL("../icons/line_end-fill.svg?v=8700498a789215f4d1d7ac2b0e63281def7d67b3834c39948b9f50e52fabc2ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
