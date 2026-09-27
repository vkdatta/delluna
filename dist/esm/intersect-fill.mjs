export const name="intersect-fill";
export const id="dl_18ebbde4f1314ff093b0";
export const url=new URL("../icons/intersect-fill.svg?v=e4931650aae0507059c4635e466f9a2510bf5ee856c39f98a4a36b78986b4162",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
