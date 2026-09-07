export const name="farm";
export const id="dl_de3abfac2bd84349baca";
export const url=new URL("../icons/farm.svg?v=2feb6bbc10772365056ad629cebf20aaa4545a8fa62f55635f9ba439365e9f0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
