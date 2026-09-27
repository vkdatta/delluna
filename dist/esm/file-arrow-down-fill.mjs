export const name="file-arrow-down-fill";
export const id="dl_f8c20a2e518141368bae";
export const url=new URL("../icons/file-arrow-down-fill.svg?v=cb9c66b894ea538755a682541816a302ca85a41663d13a3582997e97cbf52dda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
