export const name="lucid_2-grid-2x2-plus";
export const id="dl_ec04de237e7943eeae07";
export const url=new URL("../icons/lucid_2-grid-2x2-plus.svg?v=93beba1e197bbfbaa4c6b6c6de001ad9007f9f8a6d2f369f29e92c1a3d978749",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
