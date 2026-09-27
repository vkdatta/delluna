export const name="desktop-tower";
export const id="dl_e2b603e64b8546779695";
export const url=new URL("../icons/desktop-tower.svg?v=a1825962e35d24fade9543dbcbab5586270c1ab5559010e59dc0be31b82efa70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
