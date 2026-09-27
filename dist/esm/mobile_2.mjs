export const name="mobile_2";
export const id="dl_a9d3893a255d5a07f77d";
export const url=new URL("../icons/mobile_2.svg?v=666c43e81181241b3943a0f8c1348d33ff17aae20b15e41844d2490b293f2743",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
