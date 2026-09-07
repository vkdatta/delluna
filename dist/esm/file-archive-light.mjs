export const name="file-archive-light";
export const id="dl_e1f0c2eef1a54eefbcf0";
export const url=new URL("../icons/file-archive-light.svg?v=3bdbe10624a70b8a37224c4303062d8fe45230b3c229862a73b3e66b88e0db17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
