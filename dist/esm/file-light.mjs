export const name="file-light";
export const id="dl_8ffbef1938964e7d8149";
export const url=new URL("../icons/file-light.svg?v=80dec6e54c29ff21a4feb32698c8050c2eb206af199ec8c49458de6df0cd65a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
