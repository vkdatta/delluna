export const name="float_portrait_2-fill";
export const id="dl_08e6e6035cc04dae9db7";
export const url=new URL("../icons/float_portrait_2-fill.svg?v=7c5a459cbcdfbbf88b2d23fc67d067ad06f4587f5d72d329e982397a889747ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
