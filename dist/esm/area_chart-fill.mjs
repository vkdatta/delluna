export const name="area_chart-fill";
export const id="dl_2e9147b98290f98e0133";
export const url=new URL("../icons/area_chart-fill.svg?v=17f8ad93b3f24b89657b3b82d55d56753f49cd0311d11b530387debd5879884a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
