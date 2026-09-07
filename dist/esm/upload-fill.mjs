export const name="upload-fill";
export const id="dl_c8d81881cf1741d5b09d";
export const url=new URL("../icons/U/upload-fill.svg?v=822807c2006eb86f6a1b6ecc88e612da9ac789faaba6b7bf163f9cad0530e851",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
