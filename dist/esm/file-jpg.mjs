export const name="file-jpg";
export const id="dl_93050cdb6842496bbb32";
export const url=new URL("../icons/file-jpg.svg?v=7dfcaa9308508bdf046326049c25e6e14210aafd8682d45d36bd894f0af2bd3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
