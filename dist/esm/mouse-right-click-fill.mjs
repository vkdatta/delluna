export const name="mouse-right-click-fill";
export const id="dl_a5f2a1683e5f4562a1a0";
export const url=new URL("../icons/mouse-right-click-fill.svg?v=0dc884828a91834a93fdb10b4fb8020317e861849add43741db2b4acdad5edeb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
