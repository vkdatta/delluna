export const name="directions_subway";
export const id="dl_54577cb07f6e15f24fde";
export const url=new URL("../icons/directions_subway.svg?v=9a2776a350996ea255ab5145a3345adecb4528a98e6c15fe093a016a93e79ca0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
