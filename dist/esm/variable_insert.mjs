export const name="variable_insert";
export const id="dl_0d2ba1124f00482ba395";
export const url=new URL("../icons/variable_insert.svg?v=c705523f474aab5ce85d007f83f60723e80410a50b6a2de729af163d53f31ef5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
