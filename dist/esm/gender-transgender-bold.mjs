export const name="gender-transgender-bold";
export const id="dl_2a8f0533c4be4620b6b2";
export const url=new URL("../icons/gender-transgender-bold.svg?v=2433b948a818ffc98a38545a3df39add4e9e92f49a9d2ee221cf14d90d08111e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
