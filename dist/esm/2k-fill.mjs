export const name="2k-fill";
export const id="dl_a53c5259cab44ff1b10f";
export const url=new URL("../icons/2k-fill.svg?v=d3c03b03f38e162c5cdf96ebfc187d1c1ce36bf1902de6ae39cc6b53d4232617",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
