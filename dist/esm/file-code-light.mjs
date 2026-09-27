export const name="file-code-light";
export const id="dl_fe639e649d6a45ba89bf";
export const url=new URL("../icons/file-code-light.svg?v=03d248744bf8a34737332f56edd88008c0b814c4548166d65382398752423d0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
