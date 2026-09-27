export const name="hourglass_empty-fill";
export const id="dl_2e7212d48039d2261675";
export const url=new URL("../icons/hourglass_empty-fill.svg?v=75a42b636e990311552662a55f7fd84f8e17988274e8ab71d1103cc5cd9e2f2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
