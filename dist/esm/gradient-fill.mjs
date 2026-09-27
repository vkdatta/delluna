export const name="gradient-fill";
export const id="dl_6fe592880b60498aa19c";
export const url=new URL("../icons/gradient-fill.svg?v=445c6f0aae14df2905fea111d511847c1292fc1e1d22a12df579e3901049b4a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
