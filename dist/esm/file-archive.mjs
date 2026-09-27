export const name="file-archive";
export const id="dl_a0607eacc27147bd9707";
export const url=new URL("../icons/file-archive.svg?v=a1e0b4c013aed154d925143e5d321e1d67ea38ee901a14fe0415b1cc7ee3bb00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
