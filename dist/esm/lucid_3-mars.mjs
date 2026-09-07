export const name="lucid_3-mars";
export const id="dl_69590391d9514ebeaed0";
export const url=new URL("../icons/lucid_3-mars.svg?v=f8686758cb830a64a99c39e01b1cf0082c7c0f547d695447db342686d3a1a906",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
