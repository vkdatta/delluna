export const name="digital_out_of_home-fill";
export const id="dl_2704e384aeb1930d3109";
export const url=new URL("../icons/digital_out_of_home-fill.svg?v=0cfa857e6292b84480ef6b8e36b1301442b31ffb86ec4bf379b6f97e3eee5072",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
