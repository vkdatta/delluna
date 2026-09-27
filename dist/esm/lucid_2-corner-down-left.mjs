export const name="lucid_2-corner-down-left";
export const id="dl_3a5d02a20a8847eb973b";
export const url=new URL("../icons/lucid_2-corner-down-left.svg?v=08caf6fa47550bdf32de0448476b70cad424194cd3a801a8b1f9a604f3a26d46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
