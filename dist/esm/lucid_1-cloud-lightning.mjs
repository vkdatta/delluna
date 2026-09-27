export const name="lucid_1-cloud-lightning";
export const id="dl_084350543f2d4048b549";
export const url=new URL("../icons/lucid_1-cloud-lightning.svg?v=8da7daa8147b530facdc265d3cc300558e179331868aa29abf6e44c6ab168498",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
