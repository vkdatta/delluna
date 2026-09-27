export const name="eda-fill";
export const id="dl_285d0d398fda4eb57ce5";
export const url=new URL("../icons/eda-fill.svg?v=75fbcdc42e016159fdb871ddc48075affd892e5fed2e80923cd56f3876e4c378",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
