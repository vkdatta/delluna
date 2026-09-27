export const name="texture-fill";
export const id="dl_b00b5228346f8e5d7eec";
export const url=new URL("../icons/texture-fill.svg?v=13fafeea19fb08cf988b61910be502d3db7896772beafc4ac04a3a0cd505ae23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
