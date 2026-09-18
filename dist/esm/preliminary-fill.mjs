export const name="preliminary-fill";
export const id="dl_d36293e613b94f518108";
export const url=new URL("../icons/preliminary-fill.svg?v=ec3c3690211f300a283bf10ad361c42a0f15846db1665ff48d320e7af9e29f8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
