export const name="grid-four-duotone";
export const id="dl_4cc9c85b365a42b0baa7";
export const url=new URL("../icons/grid-four-duotone.svg?v=a35e22f5e32f89df8451defb60aa0abd4490089db4780195a2c9a4a887febbec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
