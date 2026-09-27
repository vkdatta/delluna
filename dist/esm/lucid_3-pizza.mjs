export const name="lucid_3-pizza";
export const id="dl_ccafa7455d214b9f9609";
export const url=new URL("../icons/lucid_3-pizza.svg?v=7e775dd3963d23cf057f21301a95c9190481a0b30bd82c9fe0435fc96ea04acc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
