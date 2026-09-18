export const name="medical_mask";
export const id="dl_706e66adbf244bd48d70";
export const url=new URL("../icons/M/medical_mask.svg?v=909fa1a339968db74a54e967028c7c7795b60463cb3bb6d326cfaede5fee814b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
