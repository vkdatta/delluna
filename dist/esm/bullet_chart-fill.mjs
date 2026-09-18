export const name="bullet_chart-fill";
export const id="dl_f815c5fd193c475b811b";
export const url=new URL("../icons/bullet_chart-fill.svg?v=8806ab0fa36676761c887b0415f8613dec53c23b956a96920df6af442fd22df7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
