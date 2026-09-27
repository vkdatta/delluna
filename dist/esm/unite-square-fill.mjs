export const name="unite-square-fill";
export const id="dl_b5c03e4523ef735d8483";
export const url=new URL("../icons/unite-square-fill.svg?v=822c80338bc6442728178113d534eaaa8401ce73a14f8e0919757544730618b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
