export const name="number-square-six-light";
export const id="dl_b247cad2971e44a6aeca";
export const url=new URL("../icons/number-square-six-light.svg?v=3068543291285166aaea0023453048666bae1ba71c72de1e797067ee37a70afd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
